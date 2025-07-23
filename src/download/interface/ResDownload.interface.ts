type CodeInfo = '200' | '201' | '400' | '404';

export interface DownloadResolve {
  message: string;
  code: CodeInfo;
}
