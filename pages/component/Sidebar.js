import Head from 'next/head'



export default function Sidebar() {
  return (
    <div className="sidebar">
    <h1>Mosh Hamedani</h1>
    <p>Coding Made Simple</p>
    <nav id="main-nav">
        <ul class="main-navigation list-group">
          <li list-group-item><a href="https://codewithmosh.com/courses" target="_blank">Courses</a></li>
          <li><a href="/tutorials">Tutorials</a></li>
          <li><a href="https://www.youtube.com/user/programmingwithmosh" target="_blank">YouTube</a></li>
          <li><a href="https://codewithmosh.com/p/about" target="_blank">About me</a></li>
          <li><a href="/contact-me">Contact me</a></li>
        </ul>
    </nav>
</div>
  )
}
