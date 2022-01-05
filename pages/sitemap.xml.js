import { getServerSideSitemap } from 'next-sitemap';
export const getServerSideProps = async (ctx) => {
  const fields = [
    {
        loc: 'https://aloha-tech.com', // Absolute url
        lastmod: new Date().toISOString(),
 
    },
    {
      loc: 'https://aloha-tech.com/myblog', // Absolute url
      lastmod: new Date().toISOString(),

    },
    {
      loc: 'https://aloha-tech.com/services', // Absolute url
      lastmod: new Date().toISOString(),

    },
    {
        loc: 'https://aloha-tech.com/contact', // Absolute url
        lastmod: new Date().toISOString(),
  
      },
  ]


  const res = await fetch(`https://api.aloha-tech.com//wp-json/work/v1/work_api`,{
    method: 'POST',
    // headers 加入 json 格式
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'lovef1232e@hexschool.com',
      password: '12345678'
    })
   });
   const data = await res.json()
   data.data.forEach(function(item){
      //  console.log(item.title);
       fields.push({
        loc: encodeURI('https://aloha-tech.com/works/'+item.title), // Absolute url
        lastmod: new Date().toISOString(),
      
       });
   });





   const res1 = await fetch(`https://api.aloha-tech.com//wp-json/work/v1/post_api`,{
    method: 'POST',
    // headers 加入 json 格式
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: 'lovef1232e@hexschool.com',
      password: '12345678'
    })
   });


   const data1 = await res1.json()
   data1.data.forEach(function(item){
    //  console.log(item.title);
     fields.push({
      loc: encodeURI('https://aloha-tech.com/blogs/'+item.title), // Absolute url
      lastmod: new Date().toISOString(),

     });
    });

    /*
let xml  = '<?xml version="1.0" encoding="UTF-8"?>'+
'<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">'
'<url><loc>https://aloha-tech.com</loc><lastmod>2022-01-04T01:04:28.591Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/myblog</loc><lastmod>2022-01-04T01:04:28.591Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/services</loc><lastmod>2022-01-04T01:04:28.591Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/contact</loc><lastmod>2022-01-04T01:04:28.591Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/works/Workfaced.com</loc><lastmod>2022-01-04T01:04:29.296Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/works/Pira.tw</loc><lastmod>2022-01-04T01:04:29.296Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/works/Taiwan%20Red%20Coral</loc><lastmod>2022-01-04T01:04:29.296Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/works/%E5%9C%8B%E9%9A%9B%E5%B1%85%E4%BD%8F%20%E9%83%BD%E5%B8%82%E5%86%8D%E7%94%9F%E8%AB%96%E5%A3%87</loc><lastmod>2022-01-04T01:04:29.296Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/works/Whisky%20Vault</loc><lastmod>2022-01-04T01:04:29.296Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/works/%E6%98%A5%E4%B8%80%E6%9E%9D%E5%95%86%E8%A1%8C</loc><lastmod>2022-01-04T01:04:29.296Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/works/UDIQ%20%E9%9B%BB%E5%AD%90%E7%94%A2%E5%93%81%E6%9E%B6</loc><lastmod>2022-01-04T01:04:29.296Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/works/%E5%B0%BC%E5%8F%AF%E6%A8%82%E8%A1%A8%E6%BC%94%E8%97%9D%E8%A1%93</loc><lastmod>2022-01-04T01:04:29.296Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/works/%E4%BA%9E%E6%B4%B2%E8%97%9D%E8%A1%93%E9%9B%99%E5%B9%B4%E5%B1%95</loc><lastmod>2022-01-04T01:04:29.296Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/blogs/Check%20if%20product%20has%20some%20category%20or%20Tag</loc><lastmod>2022-01-04T01:04:29.827Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/blogs/Woocommerce%20%20order%20code</loc><lastmod>2022-01-04T01:04:29.827Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/blogs/PHP%20Linode%20PHP%20Move%20To%207.4</loc><lastmod>2022-01-04T01:04:29.827Z</lastmod><priority>0.8</priority></url>'+
'<url><loc>https://aloha-tech.com/blogs/Centos%20%E7%9A%84%20Apache%20%E9%85%8D%E7%BD%AE%20Let%E2%80%99s%20Encrypt%20SSL</loc><lastmod>2022-01-04T01:04:29.827Z</lastmod><priority>0.8</priority></url>'+
'</urlset></xml>';
*/

   return getServerSideSitemap(ctx, fields)
  // return xml;
}
export default () => {};




