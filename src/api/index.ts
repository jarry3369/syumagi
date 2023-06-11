import { request } from "@/api/instance";

export const getMusics = (): Promise<any> => {
  return request({ url: `/musics` });
};
