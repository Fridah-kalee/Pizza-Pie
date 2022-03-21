$function(){
  $('#summary').hide();
  $('.customerdata').hide();
  $('#checkout').click(function(){
    let flavor=$(".flavor option:selected").val();
    let size=$(".size option:selected").val();
    let crust=$(".crust option:selected").val();
    let topping=$(".topping option:selected").val();
    let number=$(".number option").val();
    console.log(size);

    let order =(flavor,size,crust,topping,number,total)=>{
      return {flavor,size,crust,topping,number,total};
    };
    
  })
};

let price, totalPrice;
        switch(flavour){
            case flavour = "chicken tikka":
                switch (size){
                    case size = "medium":
                        price = 700;
                        if (crust === "cripsy") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "stuffed") {
                            totalPrice = (price * number) + 100;
                        } else if (crust === "Gluten free") {
                            totalPrice = (price * number) + 300;
                        } else {
                            totalPrice = (price * number) + 300;
                        }
                        break;
                        case size = "large":
                            price = 1100;
                            if (crust === "crispy") {
                                totalPrice = (price * number) + 100;
                            } else if (crust === "stuffed" ){
                                totalPrice = (price * number) + 100;
                            } else if (crust === "Gluten free") {
                                totalPrice = (price * number) + 300;
                            } else {
                                totalPrice = (price * number) + 300;
                            }
                            break;
                        case size = "x-large":
                        price = 1500;
                        if (crust === "crispy") {
                          totalPrice = (price * number) + 100;
                      } else if (crust === "stuffed" ){
                          totalPrice = (price * number) + 100;
                      } else if (crust === "Gluten free") {
                          totalPrice = (price * number) + 300;
                      } else {
                          totalPrice = (price * number) + 300;
                      }
                        
                        break;
                    }
                    break;
                      case flavour = "BBQ steak":
                          switch (size){
                              case size = "medium":
                                  price = 700;
                                  if (crust === "cripsy") {
                                      totalPrice = (price * number) + 100;
                                  } else if (crust === "stuffed") {
                                      totalPrice = (price * number) + 100;
                                  } else if (crust === "Gluten free") {
                                      totalPrice = (price * number) + 300;
                                  } else {
                                      totalPrice = (price * number) + 300;
                                  }
                                  break;
                                  case size = "large":
                                      price = 1100;
                                      if (crust === "crispy") {
                                          totalPrice = (price * number) + 100;
                                      } else if (crust === "stuffed" ){
                                          totalPrice = (price * number) + 100;
                                      } else if (crust === "Gluten free") {
                                          totalPrice = (price * number) + 300;
                                      } else {
                                          totalPrice = (price * number) + 300;
                                      }
                                      break;
                                  case size = "x-large":
                                  price = 1500;
                                  if (crust === "crispy") {
                                    totalPrice = (price * number) + 100;
                                } else if (crust === "stuffed" ){
                                    totalPrice = (price * number) + 100;
                                } else if (crust === "Gluten free") {
                                    totalPrice = (price * number) + 300;
                                } else {
                                    totalPrice = (price * number) + 300;
                                }
                                  
                                  break;
                              }


                              break;
                                case flavour = "peri-peri chicken":
                                    switch (size){
                                        case size = "medium":
                                            price = 700;
                                            if (crust === "cripsy") {
                                                totalPrice = (price * number) + 100;
                                            } else if (crust === "stuffed") {
                                                totalPrice = (price * number) + 100;
                                            } else if (crust === "Gluten free") {
                                                totalPrice = (price * number) + 300;
                                            } else {
                                                totalPrice = (price * number) + 300;
                                            }
                                            break;
                                            case size = "large":
                                                price = 1100;
                                                if (crust === "crispy") {
                                                    totalPrice = (price * number) + 100;
                                                } else if (crust === "stuffed" ){
                                                    totalPrice = (price * number) + 100;
                                                } else if (crust === "Gluten free") {
                                                    totalPrice = (price * number) + 300;
                                                } else {
                                                    totalPrice = (price * number) + 300;
                                                }
                                                break;
                                            case size = "x-large":
                                            price = 1500;
                                            if (crust === "crispy") {
                                              totalPrice = (price * number) + 100;
                                          } else if (crust === "stuffed" ){
                                              totalPrice = (price * number) + 100;
                                          } else if (crust === "Gluten free") {
                                              totalPrice = (price * number) + 300;
                                          } else {
                                              totalPrice = (price * number) + 300;
                                          }
                                            
                                            break;
                                        }

                                        break;
                                          case flavour = "chicken hawaiian":
                                              switch (size){
                                                  case size = "medium":
                                                      price = 700;
                                                      if (crust === "cripsy") {
                                                          totalPrice = (price * number) + 100;
                                                      } else if (crust === "stuffed") {
                                                          totalPrice = (price * number) + 100;
                                                      } else if (crust === "Gluten free") {
                                                          totalPrice = (price * number) + 300;
                                                      } else {
                                                          totalPrice = (price * number) + 300;
                                                      }
                                                      break;
                                                      case size = "large":
                                                          price = 1100;
                                                          if (crust === "crispy") {
                                                              totalPrice = (price * number) + 100;
                                                          } else if (crust === "stuffed" ){
                                                              totalPrice = (price * number) + 100;
                                                          } else if (crust === "Gluten free") {
                                                              totalPrice = (price * number) + 300;
                                                          } else {
                                                              totalPrice = (price * number) + 300;
                                                          }
                                                          break;
                                                      case size = "x-large":
                                                      price = 1500;
                                                      if (crust === "crispy") {
                                                        totalPrice = (price * number) + 100;
                                                    } else if (crust === "stuffed" ){
                                                        totalPrice = (price * number) + 100;
                                                    } else if (crust === "Gluten free") {
                                                        totalPrice = (price * number) + 300;
                                                    } else {
                                                        totalPrice = (price * number) + 300;
                                                    }
                                                      
                                                      break;
                                                  }
                                                  break;
                                                };
                                                switch(topping){
                                                  case topping="extra cheese":
                                                    totalPrice=totalPrice+150;
                                                    break;
                                                    case topping="onions":
                                                    totalPrice=totalPrice+120;
                                                    break;
                                                    case topping="black olives":
                                                    totalPrice=totalPrice+120;
                                                    break;
                                                };
                              let  newOrder= order(flavor,size,crust,topping,number,totalPrice);
                              console.log(newOrder);

                              $('#summary').slideDown(3000);
                              $('.customerdata').slideUp();
                              $('#list').slideDown();
                              $('.deliver').show(1000);
                              $('.delivernot').show(1000);
                              $('#list').text("");
                              $('#list').append("<br>"+ "flavor:" + newOrder.flavor + "<br>" +"size:"
                              +newOrder.size + "<br>" +"crust:"
                              +newOrder.crust + "br>" +"toppings:"
                              +newOrder.toppings + "<br>" +"number:"
                              +newOrder.number + "<br>" +"totalPrice:"
                           });

                            $(".deliver").click(function(){
                            $('#summmary').slideUp();
                            $('#list').slideUp();
                            $('#summmary').text("provide location details").slideDown();
                            $('.deliver').hide(1000);
                            $('.delivernot').hide(1000);
                            $('.customerdata').slideDown();
                            alert('Your Delivery is on the Way.')
                          });

                           $('.delivernot').click(function(){
                           alert('Thankyou for placing your order kindly come pick after thirty minutes.')
                          });

                      
                          $(document).ready(function(){

                          }                    