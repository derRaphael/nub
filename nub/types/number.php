<?php

namespace nub\types
{
    use \nub\core\nub as nub;
    
    class number extends nub
    {
        public function __construct( $val )
        {
            $this->value = $val;
            return $this;
        }
    
        public function __init()
        {
        }
        
        public function __toString()
        {
            return $this->value;
        }
    }
}

?>
