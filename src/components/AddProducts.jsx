import React, { useState } from 'react';
import { storage, db, auth } from '../config/config';
const AddProducts = () => {

    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState(0);
    const [productImg, setProductImg] = useState(null);
    const [error, setError] = useState('');

    // this will define an array with image types to be able to only select images 
    const types = ['image/png', 'image/jpeg', 'image/jpg'];

 

    function productImgHandler(e) {
        console.log(e.target.files);
        setProductImg(URL.createObjectURL(e.target.files[0]));
    }

    const addProducts = (e) => {
        e.preventDefault();
        // console.log(productName, productPrice, productImg);

        const uploadTask = storage.ref(`product-images/${productImg.name}`).put(productImg);
        uploadTask.on('state_changed', snapshot => {
            const progress = (snapshot.bytestransfered/snapshot.totalBytes) * 100;
            console.log(progress);;
        }, err => {
            setError(err.message)
        }, () => {
            storage.ref('product-image').child(productImg.name).getDownloadURL().then(url => {
                db.collection('products').add({
                    ProductName: productName,
                    ProductPrice: Number(productPrice),
                    ProductImg: url
                }).then(() => {
                    setProductName('');
                    setProductPrice(0);
                    setProductImg('');
                    setError('');
                    document.getElementById('file').value = '';
                }).catch(err => setError(err.message));
            })
        })
    }



  return (
    <div className='container'>
        <br />
        <h2>ADD PRODUCTS</h2>
        <hr />
        <form action="" className='form-group' onSubmit={addProducts}>
            <label htmlFor='product-name'>Product Name</label>
            <br />
            <input type='text' onChange={(e) => setProductName(e.target.value)} value={productName} className='form-control' required />
            <br />
            <label htmlFor='product-price'>Product Price</label>
            <br />
            <input type='number' onChange={(e) => setProductPrice(e.target.value)} value={productPrice} className='form-control' required />
            <br />
            <label htmlFor='product-img'>Product Image</label>
            <br />
            <input type='file'onChange={productImgHandler} className='form-control' id='file' required />
            <img src={productImg} /> 
            <br />
            <button className='btn btn-success btn-md mybtn'>ADD</button>

        </form>
        {error && <span>{error}</span>}
    </div>
  )
}

export default AddProducts
