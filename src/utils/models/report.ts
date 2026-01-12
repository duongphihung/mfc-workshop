export interface ReportView {
  asset_id: string;
  start_time: number;
  end_time: number;
  template: string;
}

export interface ReportDownload {
  filename: string;
}
