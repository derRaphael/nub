<?php

namespace nub\math\basic\operations
{
    use \nub\core\nub as nub;
    use \nub\types\number as number;

    class multiplication extends nub
    {
        public $multiplicands = array();
        
        public function __construct()
        {
            $this->__init();
        }
        
        public function __init()
        {
            $this->__set_multiplicand( new number( 1 ) );
        }
        
        public function __set_multiplicand( number $val )
        {
            $this->multiplicands[] = $val->value;
        }
        
        public function __compute()
        {
            $result = 1;
            foreach( $this->multiplicands as $multiplicand )
            {
                $result = $result * $multiplicand;
            }
            $this->value = (new number( $result ))->value;
        }
    }

}
?>
