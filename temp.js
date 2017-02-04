echo 01234|sed "/\n/!G;s/\(.\)\(.*\n\)/&\2\1/;//D;s/.//"
43210.abc
43210RLE.abc ->abc.43210
abc.RLO43210 ->abc.01234
