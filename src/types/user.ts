type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  is_superuser: boolean;
  table_name: string;
  notifications: notification[];
  workers: worker[];
  hours: any[];
};

type notification = {
  id: number;
  is_gap: boolean;
  lateness: number;
  gap: number;
  user: number;
  worker: number;
  date: Date;
};

type worker = {
  first_name: string;
  second_name: string;
  patronymic: string;
  avatar: string; //photo source address
  hour_norm: number; //1 - 36; 2-40
  vacation_days: number;
  start_day: Date;
  end_day: Date;
  vacations: vacation[];
  gaps: gap[];
  latenesses: lateness[];
  exits: passage[];
  enters: passage[];
  hours: any[];
  id: number;
  total_hours: string;
  total_days: number;
  total_gaps: string[];
};

type vacation = {
  start_date: Date;
  end_date: Date;
  worker: number;
};

type lateness = {
  id: number;
  time_of_lateness: Date;
  worker: number;
};

type gap = {
  id: number;
  date: Date;
  reason: number; //1 - вых, 2-больничный, 3-отпуск, 4-командировка
  document: string; //document source address
  worker: number;
};

type passage = {
  id: number;
  time: Date;
  worker: number;
};

export type { User, worker, passage, notification, vacation };
