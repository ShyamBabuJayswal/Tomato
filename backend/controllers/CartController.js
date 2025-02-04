import userModel from "../models/userModel.js"


 // Add items to user cart
    const addToCart = async (req, res) => {
        try {
            let userData = await userModel.findById(req.userId);
            if (!userData) {
                return res.status(404).json({
                    success: false,
                    message: "User not found",
                });
            }
    
            let cartData = userData.cartData || {};
    
            cartData[req.body.itemId] = (cartData[req.body.itemId] || 0) + 1;
    
            await userModel.findByIdAndUpdate(req.userId, { $set: { cartData } }, { new: true });
    
            return res.json({
                success: true,
                message: "Added to cart",
            });
        } catch (error) {
            console.error("Error in addToCart:", error);
            return res.status(500).json({
                success: false,
                message: "Server error",
            });
        }
    };
     
    
//remove items from user cart

const removeFromCart =async (req,res)=>{
  try {
    let userData =await userModel.findById(req.userId);
    console.log(userData);
    
    let cartData = await userData.cartData;
    console.log(cartData);
    
    if(cartData[req.body.itemId]>0){
       cartData[req.body.itemId] -= 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId,{cartData});

    res.json({
        success: true,
        message:"Removed From Cart"
    })
  } catch (error) {
    console.log(error);
    res.json({
        success: false,
        message:"Error"
    })
    
  }
}

//fetch user cart data

const getCart=async(req,res) =>{

}

export {addToCart,removeFromCart,getCart}
