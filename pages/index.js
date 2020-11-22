import Head from 'next/head'
import Post from './component/Post';

import Sidebar from './component/sidebar';

export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 ">
          <Sidebar/>
        </div>
        <div className="col-md-6">
          <Post/>
        </div>
        <div className="col-md-3">
        <Post/>
        </div>
      </div>
    </div>
  )
}
