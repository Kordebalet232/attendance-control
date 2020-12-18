import React from "react";
import ReactToPrint from "react-to-print";
import Print from "@material-ui/icons/Print";
import { Button } from "@material-ui/core";
import printStyle from "./pagePrintStyle";
import style from "./style.module.css";

type Props = {
  componentRef: React.RefObject<HTMLDivElement>;
};

const Footer = (props: Props) => {
  return (
    <div className={style.footer}>
      <ReactToPrint
        copyStyles={false}
        pageStyle={printStyle}
        trigger={() => (
          <Button className={style.print} variant="outlined" color="primary" startIcon={<Print />} disableElevation>
            Печать
          </Button>
        )}
        content={() => props.componentRef.current}
      />
    </div>
  );
};

export default Footer;
