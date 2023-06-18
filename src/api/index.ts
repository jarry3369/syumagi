import { request } from "@/api/instance";

export const getMusics = (): Promise<any> => {
  return request({ url: `/musics` });
};

export const getAlbums = (): Promise<
  Array<{
    cover: string;
    releaseDate: string;
    title: string;
    type: string;
  }>
> => {
  return request({ url: `/albums` });
};
