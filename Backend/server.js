
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const pdfParse = require('pdf-parse');
const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'tics420-mysql-server.mysql.database.azure.com',
    user: 'pedro',
    password: 'tics420-todos',
    database: 'login',
    port: 3306,
    ssl: false
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Crear la carpeta certificates si no existe
const uploadDir = path.join(__dirname, 'certificates');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configurar multer para almacenar archivos en la carpeta certificates
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });

//Ruta para subir un archivo
app.post('/upload', upload.single('file'), (req, res) => {
    const career = req.body.career;
    if (!req.file || !career) {
        return res.status(400).send({ message: 'No se ha subido ningún archivo o falta el identificador de la carrera' });
    }

    const filename = req.file.filename;

    db.query('INSERT INTO certificates (name, career) VALUES (?, ?)', [filename, career], function (err, results) {
        if (err) {
            return res.status(500).send({ message: 'Error al guardar en la base de datos' });
        }
        res.send({ message: 'Archivo subido exitosamente', id: results.insertId });
    });
});


// Ruta para obtener los archivos por carrera
app.get('/certificates/:career', (req, res) => {
    const career = req.params.career;
    db.all('SELECT * FROM certificates WHERE career = ?', [career], (err, rows) => {
        if (err) {
            return res.status(500).send({ message: 'Error al obtener los datos' });
        }
        res.send(rows);
    });
});

app.post('/login', (req, res) => {
    const { user_name, password } = req.body;

    if (!user_name || !password) {
        return res.status(400).send({ message: 'Por favor, proporcione tanto el nombre de usuario como la contraseña' });
    }

    const query = 'SELECT * FROM login WHERE user_name = ?';
    db.query(query, [user_name], (err, results) => {
        if (err) {
            console.error('Error al buscar usuario:', err);
            return res.status(500).send({ message: 'Error al buscar usuario' });
        }
        if (results.length === 0) {
            return res.status(401).send({ message: 'Usuario o contraseña inválidos' });
        }

        const user = results[0];
        const passwordIsValid = password === user.password;

        if (!passwordIsValid) {
            return res.status(401).send({ message: 'Contraseña inválida' });
        }

        const token = jwt.sign({ id: user.user_id }, 'secret_key', {
            expiresIn: 86400
        });

        res.status(200).send({ auth: true, token: token });
    });
});





// Configuración de multer para manejar archivos
const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'certificates');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


app.post('/api/guardar', (req, res) => {
    const { message, fecha, description, career } = req.body;
    const data = { message, fecha, description, career };
  
    const filePath = path.join(__dirname, 'respuesta.json');
    
    fs.writeFile(filePath, JSON.stringify(data, null, 2), (err) => {
      if (err) {
        console.error('Error al escribir el archivo', err);
        return res.status(500).send('Error al guardar los datos');
      }
      res.send('Datos guardados exitosamente');
    });
  });
  
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});