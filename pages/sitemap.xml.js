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


  return getServerSideSitemap(ctx, fields)
}
export default () => {};
