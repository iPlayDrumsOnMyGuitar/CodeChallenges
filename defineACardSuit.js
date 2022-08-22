/* Define a card suit

You get any card as an argument. Your task is to return the suit of this card (in lowercase).

Our deck (is preloaded):

('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'
 */
function defineSuit(card) {
    //paramaters : string with two characts, including the suit
    //result : string of the suit of the card
    //example 
    //pseudocode:see if the suits are included in the paramter
    //
    if(card.includes('♣')){
 
        return 'clubs'
 
    }else if(card.includes('♦')){
 
        return 'diamonds'
 
    }else if(card.includes('♥')){
 
        return 'hearts'
 
    }else{
 
        return 'spades'
 
    }
 
}
  