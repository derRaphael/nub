<?php

namespace nub\math\basic\operations
{
    use \nub\core\nub as nub;
    use \nub\types\number as number;

    class division extends nub
    {
        public $divident;
        public $divisor;
        
        public function __construct()
        {
            $this->__init();
        }
        
        public function __init()
        {
            $this->__set_divident( new number( 1 ) );
            $this->__set_divisor( new number( 1 ) );
        }
        
        public function __set_divident( number $val )
        {
            $this->divident = $val->value;
        }
        
        public function __set_divisor( number $val )
        {
            $this->divisor = $val->value;
        }
        
        public function __compute()
        {
            $this->value = $this->divident / $this->divisor;
        }
    }

}
?>
