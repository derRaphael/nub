<?php

namespace nub\math\basic\operations
{
    use \nub\core\nub as nub;
    use \nub\types\number as number;

    class subtraction extends nub
    {
        public $minuend;
        public $subtrahend;
        
        public function __construct()
        {
            $this->__init();
        }
        
        public function __init()
        {
            $this->__set_minuend( new number( 0 ) );
            $this->__set_subtrahend( new number( 0 ) );
        }
        
        public function __set_minuend( number $val )
        {
            $this->minuend = $val->value;
        }
        
        public function __set_subtrahend( number $val )
        {
            $this->subtrahend = $val->value;
        }
        
        public function __compute()
        {
            $this->value = $this->minuend - $this->subtrahend;
        }
    }

}
?>
