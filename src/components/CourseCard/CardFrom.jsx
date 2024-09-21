import { useState } from "react";
import { FaStar } from "react-icons/fa"
import Rating from 'react-rating';
const CardFrom = () => {

  const [ratings, setRatings] = useState(0);
  
  const handleAddBook = event =>{
    event.preventDefault();
       const form = event.target;
    // const name = form.name.value;
    // const author = form.author.value;
    // const quantity= form.quantity.value;
    // const category_name = form.category_name.value;
    // const description = form.description.value;
    const ratings = form.ratings.value;
    // const image = form.image.value;
    const user = {ratings};
    console.log(user);
  }
    return (
    
        <div className='flex justify-between items-center relative h-[800px]'>
          <img className="w-full opacity-35 h-[800px]" src="https://i.ibb.co/wp6WzB4/pexels-pixabay-159711.jpg"></img>
  {/* <div className="hero lg:w-full sm:w-[630px] mx-auto bg-fixed "> */}
  <div className="absolute inset-0 flex justify-center items-center">
  <div className=" bg-white w-[900px] h-[680px]">
    <div className="flex justify-center items-center my-[100px]">
    <form onSubmit={handleAddBook} className=" mx-auto" >
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 lg:mx-auto sm:m-[10px]"> 

             <div className="form-control m-[10px] lg:w-[350px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#013220] font-a">Book Name</span>
                </label>
                <input type="text" placeholder="Type book name" name="bookname" className="input input-bordered" style={{ border: "1px solid black" ,borderRadius: "0px"}} required />
              </div>

              <div className="form-control m-[10px] lg:w-[350px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#013220] font-a">Writer Name</span>
                </label>
                <input type="text" placeholder="Type name" name="writername" className="input input-bordered " style={{ border: "1px solid black" ,borderRadius: "0px"}} required />
              </div>

              <div className="form-control m-[10px] lg:w-[350px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#013220] font-a">Book Quantity</span>
                </label>
                <input type="text" placeholder="Type quantity" name="quantity" className="input input-bordered " style={{ border: "1px solid black" ,borderRadius: "0px"}} required />
              </div>

              <div className="form-control m-[10px] lg:w-[350px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#013220] font-a">Book Image</span>
                </label>
                <input type="text" placeholder="Import Logo" name="image" className="input input-bordered" style={{ border: "1px solid black" ,borderRadius: "0px"}} required />
              </div>

              <div className="form-control m-[10px] lg:w-[350px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#013220] font-a">Category</span>
                </label>
              <select type="text" name="category" className="select select-bordered w-full " style={{ border: "1px solid black" ,borderRadius: "0px"}} required>
                       <option disabled selected>Select Category</option>
                       <option>Novel</option>
                       <option>Short Stories</option>
                       <option>Fantasy</option>
                       <option>Science Fiction</option>
                       <option>Romance</option>
                       <option>Historical Fiction</option>
                       <option>Thriller</option>
                       <option>Horror</option>
                       <option>Biography</option>
                       <option>Business</option>
                       <option>Travel</option>
                       <option>Comics</option>
                    
              </select>
            </div>


            <div className="form-control m-[10px] lg:w-[350px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#013220]  font-a">Book Ratings</span>
                </label> 
             <Rating
                  emptySymbol={<FaStar color="gray" size={30} />}
                  fullSymbol={<FaStar color="gold" size={30} />}
                  initialRating={ratings}
                  onChange={(value) => setRatings(value)} 
                /> 
                 <input type="hidden" name="ratings" value={ratings} />
              </div> 


           </div>
              


             <div className="form-control m-[10px] lg:w-full sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#013220] font-a">Book Info</span>
                </label>
                <textarea className="textarea textarea-bordered" placeholder="Type description" name="description" style={{ border: "1px solid black" ,borderRadius: "0px"}} required />
              </div>

              <input type="submit" value="Add Book" className="btn bg-[#013220] text-white form-control lg:mt-[30px] sm:mt-[30px] w-[150px] h-[60px]  ml-[580px]"  style={{ border: "3px solid white" }}/>
             
        </form> 
       
    </div>
   
  </div>
  <div className="bg-slate-100 w-[400px] h-[680px]">
    <img className="mx-auto my-auto w-[400px]" src="https://i.ibb.co.com/2gTWP6v/47428a1016f0b6250a2a5e18ea2bd474-removebg-preview.png"></img>
    <div className="text-black mx-[10px]">
    <p className="text-center text-[30px] mt-[50px] font-a">How It Works :</p>
    <div className="divider mb-[30px] bg-black h-[1px]"></div>
    <img className='w-[50px]' src='https://i.ibb.co/x6r3JwZ/Untitled-design-1-removebg-preview.png'></img>
    <ol className="text-left text-[18px] my-[10px] font-b">When adding a new book to the library, please ensure that all information is accurate and complete, including any subtitles.</ol>
    <ol className="text-left text-[18px] my-[10px] font-b">Fill all the required information.</ol>
    <ol className="text-left text-[18px] my-[10px] font-b">After click the Add Book button the book will be stored in the Book list page.</ol>
    </div>
  </div>
  </div>
</div>
       
    );
};

export default CardFrom;