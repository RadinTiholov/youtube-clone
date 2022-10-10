import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Feed } from './components/Feed/Feed';
import { VideoDetail } from './components/VideoDetail/VideoDetail';
import { ChannelDetail } from './components/ChannelDetail/ChannelDetail';
import { SearchFeed } from './components/SearchFeed/SearchFeed';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Feed />} />
                <Route path='/video/:id' element={<VideoDetail />} />
                <Route path='/channel/:id' element={<ChannelDetail />} />
                <Route path='/search/:searchTerm' element={<SearchFeed />} />
            </Routes>
        </div>
    );
}

export default App;
