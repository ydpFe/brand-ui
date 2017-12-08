/**
 * 公共配置
 */

module.exports = {
    // 加载器
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader', 
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', "stage-0", 'react']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
              test: /\.less$/,
              exclude: /node_modules/,
              use: [{
                  loader: "style-loader" // creates style nodes from JS strings 
              }, {
                  loader: "css-loader" // translates CSS into CommonJS 
              }, {
                  loader: "less-loader" // compiles Less to CSS 
              }]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader?sourceMap'
                ]
            },
            { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'},
            { test: /\.(html|tpl)$/, loader: 'html-loader' }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.less', '.css']
    }
};
