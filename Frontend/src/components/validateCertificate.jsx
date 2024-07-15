// Frontend/src/components/validateCertificate.js

async function validateCertificate(file) {
    const formData = new FormData();
    formData.append('certificate', file);

    const response = await fetch('http://localhost:3000/api/validate-certificate', {
        method: 'POST',
        body: formData
    });

    const result = await response.json();
    return result;
}

export default validateCertificate;
