type MENU_LINK = {
  title: string;
  link: string;
};

type ANALYZE_DATA = {
  title: string;
  desc: string;
  from: number;
  to: number;
};

type FEATURE_DATA = {
  img: any;
  icon: any;
  title: string;
  desc: string;
};

type PRICE_DATA = {
  title: string;
  sub: string;
  badge?: string;
  value: number;
  information: {
    desc: string;
    status: boolean;
  }[];
};

export type { MENU_LINK, ANALYZE_DATA, FEATURE_DATA, PRICE_DATA };
