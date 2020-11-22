import Head from 'next/head'




export default function Post() {
  return (
    <div className="posts">
        <div className="posts-container">
          <h1>JavaScript: Guide to New ECMAScript 2020 Features</h1>
          <p>ECMAScript is the specification upon which JavaScript is based. And since 2015, it has been evolving year after year, with the addition of features like classes, modules, async/await and many others. And what makes things even better is that today’s browsers add support for new features quickly, with a short time between releases. In this […]</p>
          <div className="socialIcon">
            <a href><img src="/facebook.png" width="30" height="30" /></a>
            <a href><img src="/linkedin.png" width="30" height="30" /></a>
            <a href><img src="/twitter.png" width="30" height="30" /></a>
            <a href><img src="/mail.png" width="30" height="30" /></a>
          </div>
        </div>
    </div>
  )
}
