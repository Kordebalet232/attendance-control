const printStyle: string = `
                        @page { 
                            size: A4;
                            margin: 0mm;
                        } 

                        @media print { 
                        body { 
                         -webkit-print-color-adjust: exact; 
                         height: 100vh; 
                        } 
                        table {
                          border-collapse: collapse;
                          table-layout: auto;
                          width: 100%;
                          margin-bottom: 4px; 
                          padding: 0;
                          border: 1px solid black;
                        }
                        tr {
                          margin: 0px; 
                          padding: 0px;
                          border: 1px solid black;

                        }
                        td {
                          font-size: 10px;
                          margin: 0px; 
                          padding: 4px;
                          border: 1px solid black;
                        }
                        th {
                          font-size: 10px;
                          margin: 0px; 
                          padding: 4px;
                          border: 1px solid black;
                        }
                        }`;

export default printStyle;
