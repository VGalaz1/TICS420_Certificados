import React from "react";
import { FileUpload } from '../FileUpload';
import { TableUsage } from "../Dashboard";
import FormularioComunicacion from "../Form";
import CertificateValidator from "../CertificateValidator";
import CertificateList from "../CertificateList";
import Chart from "../Chart";

const First = () => {
    return (
        <>
            <TableUsage/> 
            <CertificateList/>       
            <FileUpload/>
            <FormularioComunicacion/>
            <CertificateValidator/>
            <Chart/>
        </>
    );
}

export default First;