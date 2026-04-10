const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

module.exports = withMDX(nextConfig);

// nextra.config.js
// const withNextra = require('nextra')({
//   theme: 'nextra-theme-docs',
//   themeConfig: './theme.config.tsx',
//   // 确保 MD 布局生效（无需额外配置，默认读取 content 下的 _layout.tsx）
// })

// module.exports = withNextra()