import fs from 'fs'
import path from 'path' 
import matter from 'gray-matter'
import marked from 'marked'

export default function Berita({
  frontmatter: { title, date, cover_image }, 
  slug, 
  content,
}) {
  return (
      <>
        {/* Bodyne */}
          <div className="bodyne">
            
            {/* Section Content */}
            <div className="container mb-5">
              <div className="content">
                <h3 className="text-center">{title}</h3>
                <h5 className="text-muted text-center py-2">{date}</h5>
                <img src={cover_image} className="content-image" />
                <div className="isiBerita mt-3">
                  <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                </div>
              </div>
            </div>
          
          </div>
          {/* End Bodyne */} 
      </>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
      params: {
          slug: filename.replace('.md', '')
      }
  }))
  

  return {
      paths,
      fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
      path.join('posts', slug + '.md'),
      'utf-8'
  )
  
  const {data:frontmatter, content} = matter(markdownWithMeta)

  return {
      props: {
          frontmatter,
          slug,
          content,
      },
  }
}