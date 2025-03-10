import filelist from './file/filelist.json';

const Htmlfilelist = filelist.map((file) => 
    <li key={file.id} class="article-container">
        <h1>{file.title}</h1>
        <p class='author_date'>{file.author} {file.date}</p>
        <p class='content'>{file.content}</p>
    </li>
);


export default function App() {
    return (
        <ul>
            {Htmlfilelist}
        </ul>
    )
}