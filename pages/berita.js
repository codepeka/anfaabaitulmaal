// import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Post from '../components/Post'
import { sortByDate } from '../utils'

export default function Berita({ posts }) {
  return (
      <>
        {/* Bodyne */}
          <div className="bodyne">
            
            {/* Section Banner */}
            <div className="container">
              <div className="banner">
                <div className="container mx-auto">
                  <h1 className="display-4 text-center">Berita Anfaa</h1>
                  <p className="lead text-center">Berita Anfaa menghadirkan berita yang bermanfaat dan juga bisa menambah keilmuan anda, selamat membaca.</p>
                </div>
              </div>
            </div>

            {/* Section Isi Berita */}
            <div className="container mt-5">
              <div className="berita mb-5">
                <h3 className="mb-3">Berita Pilihan</h3>
                {/* Card Berita Row */}
                <div className="berita row">
                {posts.map((post, index) => (
                  <Post key={index} post={post} />
                ))}
                </div>
                {/* <div className="mx-auto text-center mb-5 mt-3">
                  <button className="btn btn-success">
                    Read More
                  </button>
                </div> */}
              </div>
            </div>

          </div>
          {/* End Bodyne */} 
      </>
  )
}

export async function getStaticProps(){
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('posts'))

  // Get slug and frontmatter from posts
  const posts = files.map(filename => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    )

    const { data:frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}