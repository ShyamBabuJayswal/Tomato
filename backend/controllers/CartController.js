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
  
}

//fetch user cart data

const getCart=async(req,res) =>{

}

export {addToCart,removeFromCart,getCart}
