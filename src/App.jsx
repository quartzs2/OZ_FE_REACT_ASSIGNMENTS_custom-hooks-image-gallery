import GalleryList from './components/GalleryList';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>Animal gallery</h1>
        <p>
          애니멀 갤러리에 오신 여러분 환영합니다.
          <br />각 버튼을 클릭하여 사진을 업데이트 해보세요.
        </p>
      </header>
      <main>
        <GalleryList />
      </main>
    </>
  );
}

export default App;
