
const CardFrom = () => {
    return (
        <div className='flex justify-between items-center'>
            {/* <div><img className='w-[500px] h-[750px]'  src='r15.jpg'></img></div> */}
   <div className="hero lg:w-full sm:w-[630px] mx-auto bg-fixed " style={{backgroundImage: 'url(https://i.ibb.co/KwHynh5/Beige-Floral-Minimalist-Linktree-Background-1.png)'}}>
  {/* <div className="hero-overlay bg-opacity-30"></div> */}
  <div >
    <div >
    <form  className="grid lg:grid-cols-2 sm:grid-cols-1 lg:mx-auto sm:m-[10px]">

             <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Course Name</span>
                </label>
                <input type="text" placeholder="Type shop name" name="shopname" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Name</span>
                </label>
                <input type="text" placeholder="Type name" name="productname" className="input input-bordered " style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Quantity</span>
                </label>
                <input type="text" placeholder="Type quantity" name="quantity" className="input input-bordered " style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Owner Email</span>
                </label>
                <input type="email" placeholder="Type Owner Email" name="ownerEmail"  className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div> 

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Products Shop Location</span>
                </label>
                <input type="text" placeholder="Type Shop Location" name="location" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div> 

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Info</span>
                </label>
                <input type="text" placeholder="Type description" name="description" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              {/* <div className="form-control m-[50px]">
                <label className="label">
                  <span className="label-text text-[20px] text-white font-semibold">Ratings</span>
                </label> 
             <Rating
                  emptySymbol={<FaStar color="gray" size={30} />}
                  fullSymbol={<FaStar color="gold" size={30} />}
                  initialRating={ratings}
                  onChange={(value) => setRatings(value)} 
                /> 
                 <input type="hidden" name="ratings" value={ratings} />
              </div> */}

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Product Logo / Image</span>
                </label>
                <input type="text" placeholder="Import Logo" name="image" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              {/* <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Category</span>
                </label>
              <select type="text" name="category" className="select select-bordered w-full " style={{ border: "1px solid black" }} required>
                       <option disabled selected>Select Category</option>
                       <option>Donut</option>
                       <option>Cookies</option>
                       <option>Cake</option>
                       <option>Cup_Cakes</option>
                       <option>Choco_Drinks</option>
                    
              </select>
            </div> */}


              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Price</span>
                </label>
                <input type="text" placeholder="Type Price" name="price" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Profit %</span>
                </label>
                <input type="text" placeholder="Type profit" name="profit" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>

              <div className="form-control m-[20px] lg:w-[500px] sm:w-[500px]">
                <label className="label">
                  <span className="label-text text-[20px] text-[#411900] font-semibold">Discount %</span>
                </label>
                <input type="text" placeholder="Type discount" name="discount" className="input input-bordered" style={{ border: "1px solid black" }} required />
              </div>


              <input type="submit" value="Add Product" className="btn bg-[#A0522D] text-white form-control lg:mt-[50px] sm:mt-[30px] w-[150px] h-[60px]  ml-[500px]"  style={{ border: "3px solid white" }}/>
             
        </form> 
        {/* <img className='lg:ml-[1200px] lg:mt-[-450px] sm:ml-[200px] sm:mt-[-100px]' src='https://i.ibb.co/rG3KrNm/1.png'></img> */}
    </div>
  </div>
</div>
        </div>
    );
};

export default CardFrom;