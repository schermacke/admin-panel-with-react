import { useState } from 'react';
import axios from 'axios';
import './App.css';

const AdminPanel = () => {
  const [newImageUrl, setNewImageUrl] = useState('');
  const [newTextH2, setNewTextH2] = useState('');
  //const [selectedFile, setSelectedFile] = useState(null);

  const updateImageUrl = () => {
    axios.put('http://localhost:3000/api/image', { url: newImageUrl })
      .then(() => {
        alert('Image URL updated successfully!');
      })
      .catch(error => {
        console.error('Error updating image URL:', error);
        alert('Failed to update image URL.');
      });
  };

  const updateText = () => {
    axios.put('http://localhost:3000/api/image', { texth2: newTextH2 })
      .then(() => {
        alert('Text updated successfully!');
      })
      .catch(error => {
        console.error('Error updating Text:', error);
        alert('Failed to update Text.');
      });
  };

  /*const onFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };*/

  /*const uploadImage = () => {
    const formData = new FormData();
    formData.append('image', selectedFile);

    axios.post('http://localhost:3000/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log('Imagem enviada com sucesso:', response.data);
      // Adicione uma função para buscar a imagem, se necessário
    })
    .catch(error => {
      console.error('Erro ao enviar a imagem:', error);
    });
  };*/

  return (
    <div className='divInitial'>
      <h1>Bem Vindo ao painel de administração</h1>
      <h3>imagem principal</h3>
      <div className="inputButton">
        <input
          style={{ minWidth: "500px" }}
          size={"large"}
          className="input"
          value={newImageUrl}
          onChange={(e) => setNewImageUrl(e.target.value)}
          placeholder="Enter new image URL"
        />
        <button className="button" onClick={updateImageUrl}>Update Image</button>
        <br />
        <h3>Titulo</h3>
        <input
          style={{ minWidth: "500px" }}
          size={"large"}
          className="input"
          value={newTextH2}
          onChange={(e) => setNewTextH2(e.target.value)}
          placeholder="Enter new Text"
        />
        <button className="button" onClick={updateText}>Update Text</button>
      </div>
      <h2>Sessão - sobre</h2>
      <div>





      </div>

      { /*     <div className="upload">
        <input type="file" onChange={onFileChange} />
        <button className="buttonUpload" onClick={uploadImage}>Upload Image</button>
      </div>*/}
    </div>
  );
};

export default AdminPanel;
