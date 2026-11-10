function hasTwoCubeSums(n)
{
    let count = 0;
    let limit = Math.cbrt(n);

    for (let a = 1; a <= limit; a++)
    {
        for (let b = a + 1; b <= limit; b++)
        {
            if (a * a * a + b * b * b === n)
            {
                count++;
                if (count >= 2)
                {

                    return true;
                }
            }
        }
    }

    return false;
}