Hi Team, 

 

Welcome on-Board, Please read the complete email to understand the process of integration (Page Redirection v2.0).

 

To initiate the integration, kindly signup on the below URL. Please find the attached sandbox signup guide and share the merchant ID with us. Our team will enable the parameters for you.

 

https://sandbox.jazzcash.com.pk/sandbox

 

Visit the below link after signup to generate your testing credentials: 

https://sandbox.jazzcash.com.pk/Sandbox/Home/GettingStarted#

 

Once sign up done, then log in and click on sandbox testing left side navbar option and where click on HTTP POST Redirection for code level implementation instructions. 

 

Integration Guide: 

·                Web Forms to be implemented. 

·                Request Code to be implemented on the server-side. 

·                Return should be the same as in the sandbox and in code. 

·                Parameters to call as per the PHP sample code attached for assistance. 

·                Transaction Logs can be viewed at following path HTTP Redirection v 2.0 a View Call Logs 

·                For details related to parameters reference to sandbox documentation. 

 

Suggestion: 

Create a web form at request side to implement JazzCash for PGW Landing. 
Transaction Date Time format as YYYYMMDDHHMMSS 
Transaction Ref No must be unique 
 

Secure Hash Calculation: 

Concatenate all parameters from A-Z format and join with Integrity Salt to generate SHA-256 HMAC. Secure hash logic must be written in server-side language (e.g php,c# etc).

 

 

For Mobile Application same redirection code will be used in web-view. 

 

Testing: 

 

After the configurations, perform few test transactions take the screenshots of the transactions and share the testing results. 

 

Mobile Account 
Voucher Payment 
Credit/Debit 
 

The below screenshots are needed in testing against each payment method: 

Merchant Checkout page 
Our landing page 
Payment method selection 
Payment 
Payment Response against the attempted payment on the Merchant Callback URL 
Order status from Merchant Admin Panel 
 

Paste all the screenshot as per the attached word file and share the testing results by simply attaching and replying in the same email thread. 

 

In case of any query, feel free to contact us. 

 

Sample PHP CODE for JazzCash Implementation Page Redirection (v2.0): 

 

                <?php

 

    // Production/Sandbox Credentials

 

    // $MerchantID    = ""; //Your Merchant from transaction Credentials

    // $Password      = ""; //Your Password from transaction Credentials

    // $HashKey = ""; //Your HashKey/integrity salt from transaction Credentials    

    // $ReturnURL     = ""; //Your Return URL, It must be static

 

 

    // *** for sandbox testing environment

    $PostURL = "https://sandbox.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform/";

 

    // *** for production environment

    //$PostURL = "https://payments.jazzcash.com.pk/CustomerPortal/transactionmanagement/merchantform";

 

    date_default_timezone_set("Asia/karachi");

    $Amount = 1 * 100; //Last two digits will be considered as Decimal

    $BillReference = "billRef"; //use AlphaNumeric only

    $Description = "Product test description"; //use AlphaNumeric only

    $IsRegisteredCustomer = "No"; // do not change it

    $Language = "EN"; // do not change it

    $TxnCurrency = "PKR"; // do not change it (JAZZCASH Payment gateway only deals in ‘PKR’)

    $TxnDateTime = date('YmdHis');

    $TxnExpiryDateTime = date('YmdHis', strtotime('+1 Days'));

    $TxnRefNumber = "First three letter domain name" . date('YmdHis') . mt_rand(10, 100); // You can customize it (only Max 20 Alpha-Numeric characters)

 

    $TxnType = ""; // Leave it empty

    $Version = '2.0';

    $SubMerchantID = ""; // Leave it empty

    $BankID = ""; // Leave it empty

    $ProductID = ""; // Leave it empty

    $ppmpf_1 = ""; // use to store extra details (use AlphaNumeric only)

    $ppmpf_2 = ""; // use to store extra details (use AlphaNumeric only)

    $ppmpf_3 = ""; // use to store extra details (use AlphaNumeric only)

    $ppmpf_4 = ""; // use to store extra details (use AlphaNumeric only)

    $ppmpf_5 = ""; // use to store extra details (use AlphaNumeric only)

 

    $HashArray = [$Amount, $BankID, $BillReference, $Description, $IsRegisteredCustomer, $Language, $MerchantID, $Password, $ProductID, $ReturnURL, $TxnCurrency, $TxnDateTime, $TxnExpiryDateTime, $TxnRefNumber, $TxnType, $Version, $ppmpf_1, $ppmpf_2, $ppmpf_3, $ppmpf_4, $ppmpf_5];

 

    $SortedArray = $HashKey;

    for ($i = 0; $i < count($HashArray); $i++) {

        if ($HashArray[$i] != 'undefined' and $HashArray[$i] != null and $HashArray[$i] != "") {


            $SortedArray .= "&" . $HashArray[$i];

        }

    }
     $Securehash = hash_hmac('sha256', $SortedArray, $HashKey);

    ?>

    <div id="header">

        <form method="post" action="<?php echo $PostURL; ?>" >

        <input type="text" name="pp_Version" value="<?php echo $Version; ?>" />

        <input type="text" name="pp_TxnType" placeholder="TxnType" value="<?php echo $TxnType; ?>" />

        <input type="text" name="pp_Language" value="<?php echo $Language; ?>" />

        <input type="text" name="pp_MerchantID" value="<?php echo $MerchantID; ?>" />

        <input type="hidden" name="pp_SubMerchantID" value="<?php echo $SubMerchantID; ?>" />

        <input type="password" name="pp_Password" value="<?php echo $Password; ?>" />

        <input type="text" name="pp_TxnRefNo" value="<?php echo $TxnRefNumber; ?>" />

        <input type="text" name="pp_Amount" value="<?php echo $Amount; ?>" />

        <input type="text" name="pp_TxnCurrency" value="<?php echo $TxnCurrency; ?>" />

        <input type="text" name="pp_TxnDateTime" value="<?php echo $TxnDateTime; ?>" />

        <input type="text" name="pp_BillReference" value="<?php echo $BillReference ?>" />

        <input type="text" name="pp_Description" value="<?php echo $Description; ?>" />

        <input type="hidden" name="pp_IsRegisteredCustomer" value="<?php echo $IsRegisteredCustomer; ?>" />

        <input type="hidden" id="pp_BankID" name="pp_BankID" value="<?php echo $BankID ?>" />

        <input type="hidden" id="pp_ProductID" name="pp_ProductID" value="<?php echo $ProductID ?>" />

        <input type="text" name="pp_TxnExpiryDateTime" value="<?php echo  $TxnExpiryDateTime; ?>" />

        <input type="text" name="pp_ReturnURL" value="<?php echo $ReturnURL; ?>" />

        <input type="text" name="pp_SecureHash" value="<?php echo $Securehash; ?>" />

        <input type="text" name="ppmpf_1" placeholder="ppmpf_1" value="<?php echo $ppmpf_1; ?>" />

        <input type="text" name="ppmpf_2" placeholder="ppmpf_2" value="<?php echo $ppmpf_2; ?>" />

        <input type="text" name="ppmpf_3" placeholder="ppmpf_3" value="<?php echo $ppmpf_3; ?>" />

        <input type="text" name="ppmpf_4" placeholder="ppmpf_4" value="<?php echo $ppmpf_4; ?>" />

        <input type="text" name="ppmpf_5" placeholder="ppmpf_5" value="<?php echo $ppmpf_5; ?>" />
        <br /> <br /> <br />

        <button id="submit" type="submit">submit</button>

        </form>

 

    </div>

 