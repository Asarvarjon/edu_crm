
module.exports = function(permission_name, permissions, error) {
   
    let permission = permissions.find((x) => {
      return x["permission.permission_name"] == permission_name
    }); 

    if(!permission){
      throw new error(401, "You don't have permission");
      
    }; 

}