import { getConnection } from "./../database/database";

const getProducts= async(req,res)=>{
  try{
    const connection= await getConnection();
    const result = await connection.query("SELECT * FROM product");
    res.json(result);
  }catch(error){
    res.status(500);
    res.send(error.messages);
  }
};


const getProduct= async(req,res)=>{
  try{
    const {lo_prod} = req.params;
    const connection= await getConnection();
    const result = await connection.query("SELECT * FROM product WHERE logo_prod =?",lo_prod);
    res.json(result);
  }catch(error){
    res.status(500);
    res.send(error.messages);
  }
};
export const methods ={
  getProducts,
  getProduct
}