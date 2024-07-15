import React from 'react';
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
} from '@tremor/react';
import { CheckCircleIcon, ExclamationCircleIcon, ClockIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import "./Login.css";
import Badge from './Badge'; // Import the custom Badge component

const data = [
  {
    name: 'Pedro Fajardo',
    mail: 'pefajardo@alumnos.uai.cl',
    archivo: 'TICS420.PDF',
    status: 'No Verificado',
  },
  {
    name: 'María Rosario Baeza',
    mail: 'marbaeza@alumnos.uai.cl',
    archivo: 'CAMBRIGDE_TOEFL.PDF',
    status: 'Verificado',
  },
  {
    name: 'Persona Ejemplo',
    mail: 'ejemplo@alumnos.uai.cl',
    archivo: 'ISO2500.PDF',
    status: 'Pendiente',
  },
  {
    name: 'Nicolás Cenzano',
    mail: 'nicolas.cenzano@uai.cl',
    archivo: 'CERTIFICADOMÁXIMO.PDF',
    status: 'Verificado',
  },
];

const getStatusBadge = (status) => {
  switch (status) {
    case 'Verificado':
      return <Badge color="green" icon={<CheckCircleIcon className="icon" />}>{status}</Badge>;
    case 'No Verificado':
      return <Badge color="red" icon={<ExclamationCircleIcon className="icon" />}>{status}</Badge>;
    case 'Pendiente':
      return <Badge color="yellow" icon={<ClockIcon className="icon" />}>{status}</Badge>;
    default:
      return <Badge>{status}</Badge>;
  }
};

export function TableUsage() {
  const { t } = useTranslation();
  return (
    <Card className="table-card">
      <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold text-xl mb-4">
        {t("table")}
      </h3>
      <Table className="mt-5 bg-white rounded-lg overflow-hidden shadow-md">
        <TableHead>
          <TableRow className="table-header">
            <TableHeaderCell className="table-header-cell">
              {t("name")}
            </TableHeaderCell>
            <TableHeaderCell className="table-header-cell">
              {t("email-address")}
            </TableHeaderCell>
            <TableHeaderCell className="table-header-cell">
              {t("certificate")}
            </TableHeaderCell>
            <TableHeaderCell className="table-header-cell">
              {t("state")}
            </TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.name} className="table-row">
              <TableCell className="table-cell">
                {item.name}
              </TableCell>
              <TableCell className="table-cell">
                {item.mail}
              </TableCell>
              <TableCell className="table-cell">
                <Link href="/certificates/file.pdf" target="_blank" className="table-link">
                  {item.archivo}
                </Link>
              </TableCell>
              <TableCell className="table-cell">
                {getStatusBadge(item.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}
