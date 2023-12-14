
export interface Movie {
    show: {
      id: number;
      name: string;
      summary: string;
      image: {
        medium: string;
        original: string;
      };
      rating: {
        average: number;
      };
    };
  }

