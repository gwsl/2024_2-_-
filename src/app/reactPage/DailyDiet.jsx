import React from 'react';
import './DailyDiet.css'
import Image from 'next/image';

function DailyDiet(props) {
    return (
        <div>
            <h3>식단 추가</h3>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <Image src="/images/할수있다.png" alt='' width={300} height={300}/>
                        </td>
                        <td>
                            <Image src="/images/할수있다.png" alt='' width={300} height={300}/>
                        </td>
                        <td>
                            <Image src="/images/할수있다.png" alt='' width={300} height={300}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DailyDiet;