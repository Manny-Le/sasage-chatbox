// Environment Configuration Utility
class EnvironmentConfig {
  private readonly environment: string;
  private readonly config: any;

  constructor() {
    this.environment = this.getEnvironment();
    this.config = this.getConfig();
  }

  // Nhận diện môi trường hiện tại
  getEnvironment(): string {
    // Kiểm tra NODE_ENV trước
    if (process.env.NODE_ENV) {
      return process.env.NODE_ENV;
    }

    // Kiểm tra REACT_APP_NODE_ENV
    if (process.env.REACT_APP_NODE_ENV) {
      return process.env.REACT_APP_NODE_ENV;
    }

    // Mặc định là development
    return 'development';
  }

  // Lấy cấu hình cho môi trường hiện tại
  getConfig(): any {
    const env = this.environment;
    
    // Cấu hình mặc định
    const defaultConfig = {
      apiBaseUrl: process.env.REACT_APP_API_BASE_URL || 'http://127.0.0.1:8000/api/v1',
      appName: process.env.REACT_APP_APP_NAME || 'Sasage Agent',
      appVersion: process.env.REACT_APP_APP_VERSION || '2.5 Pro',
      companyName: process.env.REACT_APP_COMPANY_NAME || 'Caster Company',
      features: {
        voiceInput: process.env.REACT_APP_ENABLE_VOICE_INPUT === 'true',
        fileUpload: process.env.REACT_APP_ENABLE_FILE_UPLOAD === 'true',
        videoCall: process.env.REACT_APP_ENABLE_VIDEO_CALL === 'true',
        deepSearch: process.env.REACT_APP_ENABLE_DEEP_SEARCH === 'true',
        canvas: process.env.REACT_APP_ENABLE_CANVAS === 'true',
        imageUpload: process.env.REACT_APP_ENABLE_IMAGE_UPLOAD === 'true',
      }
    };

    // Cấu hình theo môi trường
    const environmentConfigs: { [key: string]: any } = {
      development: {
        apiBaseUrl: process.env.REACT_APP_API_BASE_URL_DEVELOPMENT || defaultConfig.apiBaseUrl,
        appName: `${defaultConfig.appName} (Dev)`,
        debug: true,
        logLevel: 'debug'
      },
      staging: {
        apiBaseUrl: process.env.REACT_APP_API_BASE_URL_STAGING || 'http://staging-api.caster.com/api/v1',
        appName: `${defaultConfig.appName} (Staging)`,
        debug: true,
        logLevel: 'info'
      },
      production: {
        apiBaseUrl: process.env.REACT_APP_API_BASE_URL_PRODUCTION || 'https://api.caster.com/api/v1',
        appName: defaultConfig.appName,
        debug: false,
        logLevel: 'error'
      }
    };

    return {
      ...defaultConfig,
      ...environmentConfigs[env],
      environment: env
    };
  }

  // Lấy API base URL
  getApiBaseUrl(): string {
    return this.config.apiBaseUrl;
  }

  // Lấy tên ứng dụng
  getAppName(): string {
    return this.config.appName;
  }

  // Lấy version
  getAppVersion(): string {
    return this.config.appVersion;
  }

  // Lấy tên công ty
  getCompanyName(): string {
    return this.config.companyName;
  }

  // Kiểm tra feature flag
  isFeatureEnabled(featureName: string): boolean {
    return this.config.features[featureName] || false;
  }

  // Lấy tất cả cấu hình
  getAllConfig(): any {
    return this.config;
  }

  // Log thông tin môi trường (chỉ trong development)
  logEnvironmentInfo(): void {
    if (this.config.debug) {
      console.log('🌍 Environment Configuration:');
      console.log(`   Environment: ${this.config.environment}`);
      console.log(`   API Base URL: ${this.config.apiBaseUrl}`);
      console.log(`   App Name: ${this.config.appName}`);
      console.log(`   App Version: ${this.config.appVersion}`);
      console.log(`   Company: ${this.config.companyName}`);
      console.log(`   Debug Mode: ${this.config.debug}`);
      console.log('   Features:', this.config.features);
    }
  }
}

// Tạo instance singleton
const config = new EnvironmentConfig();

// Log thông tin môi trường khi khởi tạo
config.logEnvironmentInfo();

export default config; 