import Link from 'next/link'

export default function post({ post }) {
    return (
        <div className="card-berita mb-4 col-md-4 col-sm-12">
            <Link href={`/berita/${post.slug}`}>
                <a>
                    <img src={post.frontmatter.cover_image} className="berita-img" alt='' />
                    <p className="text-muted text-center mb-1 fs-12">{post.frontmatter.date}</p>
                    <h6 className="text-center">{post.frontmatter.title}</h6>
                </a>
            </Link>
        </div>
    )
}
