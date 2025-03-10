import filelist from './file/filelist.json';

const Htmlfilelist = filelist.map((file) => 
    <li key={file.id}>
        {file.content}
    </li>
);


export default function App() {
    return (
        <ul>
            {Htmlfilelist}
        </ul>
    )
}