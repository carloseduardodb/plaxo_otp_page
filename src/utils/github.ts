export interface GitHubRelease {
  tag_name: string;
  name: string;
  assets: Array<{
    name: string;
    browser_download_url: string;
    size: number;
  }>;
}

export interface DownloadInfo {
  os: string;
  file: string;
  size: string;
  description: string;
  url: string;
}

export async function getLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/carloseduardodb/plaxo_otp/releases/latest"
    );
    if (!response.ok) return null;
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar release:", error);
    return null;
  }
}

export function formatFileSize(bytes: number): string {
  const mb = bytes / (1024 * 1024);
  return `~${mb.toFixed(1)}MB`;
}

export function generateDownloadInfo(
  release: GitHubRelease | null
): DownloadInfo[] {
  const fallbackDownloads: DownloadInfo[] = [
    {
      os: "Windows",
      file: "Plaxo.OTP_1.1.0_x64-setup_windows.exe",
      size: "~1.5MB",
      description: "Instalador para Windows 10/11",
      url: "https://github.com/carloseduardodb/plaxo_otp/releases/latest/download/Plaxo.OTP_1.1.0_x64-setup_windows.exe",
    },
    {
      os: "macOS",
      file: "Plaxo.OTP_1.1.0_x64_darwin.dmg",
      size: "~2.3MB",
      description: "Pacote universal para macOS",
      url: "https://github.com/carloseduardodb/plaxo_otp/releases/latest/download/Plaxo.OTP_1.1.0_x64_darwin.dmg",
    },
    {
      os: "Linux",
      file: "plaxo-otp_1.1.0_amd64_linux.deb",
      size: "~3.1MB",
      description: "Pacote DEB para Ubuntu/Debian",
      url: "https://github.com/carloseduardodb/plaxo_otp/releases/latest/download/plaxo-otp_1.1.0_amd64_linux.deb",
    },
  ];

  if (!release) return fallbackDownloads;

  const downloads: DownloadInfo[] = [];

  const assetMap = [
    {
      pattern: /_x64-setup_windows\.exe$/i,
      os: "Windows",
      description: "Instalador para Windows 10/11",
    },
    {
      pattern: /_x64_darwin\.dmg$/i,
      os: "macOS",
      description: "Pacote universal para macOS",
    },
    {
      pattern: /_amd64_linux\.deb$/i,
      os: "Linux",
      description: "Pacote DEB para Ubuntu/Debian",
    },
  ];

  for (const map of assetMap) {
    const asset = release.assets.find((a) => map.pattern.test(a.name));
    if (asset) {
      downloads.push({
        os: map.os,
        file: asset.name,
        size: formatFileSize(asset.size),
        description: map.description,
        url: asset.browser_download_url,
      });
    }
  }

  return downloads.length > 0 ? downloads : fallbackDownloads;
}

export function generateAdditionalDownloads(
  release: GitHubRelease | null
): DownloadInfo[] {
  const fallback: DownloadInfo[] = [
    {
      os: "macOS Apple Silicon",
      file: "Plaxo.OTP_1.1.0_aarch64_darwin.dmg",
      size: "~2.3MB",
      description: "",
      url: "https://github.com/carloseduardodb/plaxo_otp/releases/latest/download/Plaxo.OTP_1.1.0_aarch64_darwin.dmg",
    },
    {
      os: "Linux RPM",
      file: "plaxo-otp-1.1.0-1.x86_64_linux.rpm",
      size: "~3.1MB",
      description: "",
      url: "https://github.com/carloseduardodb/plaxo_otp/releases/latest/download/plaxo-otp-1.1.0-1.x86_64_linux.rpm",
    },
  ];

  if (!release) return fallback;

  const additional: DownloadInfo[] = [];

  const additionalMap = [
    { pattern: /_aarch64_darwin\.dmg$/i, os: "macOS Apple Silicon" },
    { pattern: /_x86_64_linux\.rpm$/i, os: "Linux RPM" },
  ];

  for (const map of additionalMap) {
    const asset = release.assets.find((a) => map.pattern.test(a.name));
    if (asset) {
      additional.push({
        os: map.os,
        file: asset.name,
        size: formatFileSize(asset.size),
        description: "",
        url: asset.browser_download_url,
      });
    }
  }

  return additional.length > 0 ? additional : fallback;
}
