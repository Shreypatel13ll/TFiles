import type { Config } from 'jest';

const config: Config = {
    testEnvironment: 'node',
    coveragePathIgnorePatterns: ["/node_modules/"],
    verbose: true,
};

export default config;