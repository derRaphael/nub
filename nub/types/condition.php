<?php

namespace nub\types
{
    use \nub\core\nub as nub;
    
    class condition extends nub
    {
        const __AND__ = "__AND__";
        const __NOT__ = "__NOT__";
        const __OR__  = "__OR__";

        const __EQ__  = "__EQUAL__";
        const __NE__  = "__NOT_EQUAL__";
        const __EQT__ = "__EQUAL_TYPE__";
        const __NET__ = "__NOT_EQUAL_TYPE__";
        const __LT__  = "__LESS_THAN__";
        const __GT__  = "__GREATER_THAN__";
        const __LTE__ = "__LESS_THAN_OR_EQUAL__";
        const __GTE__ = "__GREATER_THAN_OR_EQUAL__";
    
        public function __construct( $val )
        {}
    
        public function __init()
        {}
        
        public function __compute()
        {}
        
        public function __disable()
        {}
        
    }
}

?>
