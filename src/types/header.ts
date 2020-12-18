type Header = {
  month: number;
  year: number;

  fromDate: Date;
  toDate: Date;

  fromDateStr: string;
  toDateStr: string;
  daysOfMonth: number[];
};

export default Header;
