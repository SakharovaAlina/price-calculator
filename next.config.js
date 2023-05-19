/** @type {import('next').NextConfig} */
const webpack = require('webpack');
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    publicRuntimeConfig: {
        SITE_NAME: process.env.SITE_NAME,
        BASE_URL: process.env.BASE_URL,
        IS_DEV_MODE: process.env.DEBUG_MODE,
    },
    webpack(config, {isServer, buildId, dev}) {
        //config.resolve.alias['src'] = path.join(__dirname, 'src');
        config.module.rules.push({
            test: /\.(raw)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: 'raw-loader',
        });

        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]',
                },
            },
        });

        config.plugins.push(
            new webpack.ContextReplacementPlugin(
                /moment[/\\]locale$/,
                /en-gb|ua/
            )
        );

        config.experiments = {...config.experiments, topLevelAwait: true};

        return config;
    },
};

module.exports = nextConfig;
