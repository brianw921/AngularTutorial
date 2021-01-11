import {Component} from '@angular/core';
import { CoursesService } from './courses.service';
//Declarator function. 
@Component({ 
    selector: 'courses', //<courses>
    template: 
                `
                <button class="btn btn-primary" [class.active]="isActive">Save</button>
                <button [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
                <div (click)="onDivClicked()" [style.backgroundColor]="pink">
                    <button (click)="onSave($event)">Save</button>
                </div>
                <h2>{{ title }}</h2>
                <img src="{{imageUrl}}" />
                <img [src]="imageUrl" /> 
                <table>
                    <tr>
                        <td [attr.colspan]="colSpan"></td>
                    </tr>
                </table>
                <input  (keyup.enter)="onKeyUp($event)"/>
                <input #email (keyup.enter)="onKeyUpp(email.value)"/>
                <input [value]="email" (keyup.enter)="onKeyUpp($event)"/>
                <input  (keyup.enter)="onKeyUpp($event)"/>

                {{course.title | uppercase | lowercase}} <br/>
                {{course.students | number}} <br/>
                {{course.rating | number: '1.2-2'}} <br/>
                {{course.price | currency:'AUD':true:'3.2-2'}} <br/>
                {{course.releaseDate | date:'shortDate'}}
                `
            //attr.colspan tells angular to target the colspan attribute of a html element
            //String interpolation vs property binding. String interpolation when rendering text
}) 

export class CoursesComponent{
    title = "List of courses";
    //ANGULAR FUNDAMENTALS
    // // courses = ["course1" , "course2", "course3"];

    // //HTTP endpoint should be delegated to services. 
    // courses;

    // constructor(service: CoursesService){
    //     this.courses = service.getCourses();

    //DISPLAY DATA AND HANDLING EVENTS
    imageUrl = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhISERMVEhUVGBYWFxgXGBURFxYVIBYXFhUVFxYYHSggGBolHRUVITMjJSkrLi4uFx8zOzMtNzQtLisBCgoKDg0OGxAQGzAlHyYuLystLS0tLS0rLS0tLS0tLS0tLS0tKy0tLSsvLS0tLS0tLS0uLS01Ky0tLS0tLS0tLf/AABEIAM4A3AMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABAYCAwUBBwj/xABEEAACAgEBBQYCBQoEBQUBAAABAgADEQQFEiExQQYTUWFxgSIyBxRSkaEjQkNTYnKCkrHBM5OiwiRjc4OyRGSz4fAV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAMEBQIBBv/EACcRAAICAQQBBAIDAQAAAAAAAAABAgMRBBIhMUETIlFhcbEyQpEF/9oADAMBAAIRAxEAPwD7jERAEREAT5L9L3bPGdDS2B+nYeme6B9OJ9h4y89vNv8A1LR2WrjvG+CrP6w8j7DJ9p+V9pbQNlxJYtnJJPMk82PmSYB+pPo52gb9naV2JZgu4xPEkoSmSfQA+8ss+bfQNqi2zmQ/o7nHsQrf3M+kwBERAEREAREQBERAEREAREQBERAEREAREQBERAEREARE1am9UR3Y4VFLE+AAyf6QD4P9O3aPf1A06t8NAwcH9Kwy3uBuj3M4HYP6MrtWBfqWOnpPFeH5SweKg8FXzMtXYvsl9cufaWtXeV3Z6q2HByWJ7xgea9AOuJ9SzM3Vaza9kO/knrqzyznfR9serSNrKKAQi2VEAkscmlSTky4yvdmR+X1x/bq/+FZYZdobdcW/gil2xERJTkREQBERAEREARMXcAZJAHieAnD2h2z2fTkWaukEcwHDH7lzAO9Eol/0u7JU4Fzt+7XYR9+JDu+mTQcq677PRVUf6mgH0eJSuy/0jUa29dOlNyMwZsncZQBxOSrZH3S6wBERAEh7Q2ilIG9lmbgqKN53P7Kj+vISLtDa5DGnTgWXDnn/AA6geTWMPwUcT5c5r0WzwmXLGy1vnsb5m/ZH2UHRRwkc7FE6UckvYu1F1NQtVWTiysjYDI4JDIwHDIIk+cDZI7vWaivpcq3qP2h+Tt/EVn+Kd+dxeVk5YiInoE5Hao/8M6/rClZ9HdVP4Ezrzi9p+K0J9rUVfgd8/wDjOZPCbCNRUDgBgDgB4AcAJ5iemeFgOJ5DifTmZ80+WaI7I8frT/a1Dj2QLX/tMsE4/ZKnd0tRxg2b1pzzzYxs4/zY9p2J9JXHbBL6M99iIidngiJjbYFBZiFA4kk4AHiSYBlMbbAoLMQoHEknAA8STOFqNvtZkaRA4/W2ZSofu/nWH04echJoN5t+921D8xvcK0P7FQ+EepyfOVbtXXXx2ySNcpE3UdpMnd01TXnq5/JVD/uN838IM0d7qrMd5etQ6rQmT/mWZ/8AETcRMZnz19j64J1RHycjbdOmp0911qm7ukd965muO9g4xvHA44HADnPzGPHx4n1n2X6a+0AWpNEh+KzFlvlWD8C+7DPtPjg4mX9HvcN0/JDbjOEe1852tk0tYyogax2IAUcck8gB4zLs12X1Ots7vTVlvtNyRP3m5D05z9Ddg+wVGz0DcLbyPisI5eKoOg8+ZlsiMfo57GDQ1my3DaiwDfI4hF5itf7nqZcoiAJXtobUe52o0zbirwtu54PWurxfxPJfM8Jp1m1W1LPVQSlK/C9y8DY351dR6Aci/sOPEbdPUqAKoCqBgAcABKOo1ag9ke/P0TV1Z5ZI2fpUqQJWMDn4knqzMeLMepMkF5pVsTy1pUdmFySbSPtGwLZprcgbtgQ/u2Apj03tz7hLDKjttS2nu6kKXX95Pyi/iolo0eoFlaWDk6qw9CAR/WXdHbvi/oitjtZuiIlwiE4Xarh9UcnAXUVj+ZWQfiwndlf7WW76rTVuteHrtVSeACuDvufzV4EeZ5Ti1+x/g9XYE5+rXUXBq6VFakFTbZnwxlKxxb1OBOrpqSF+NgzdSBuj0A8JtmJXVjlluUs9HPXZ12VL6u3CgAJWK6U/oW/GbX0HXvtR/msPwEmb0g7V2jXRW1lhwowOHElicKqjqxJAAliV0/k4UEaLdLZ+bqtQnoyP+DoZmlurT5b1t8rawP8AVXj+kr/artU+zxRZqtKwquOMq6s9bYzuuuME48D0M7uz9bXdWl1TB67AGUjqP7HpiRTs1NXMm/2dKNcuiZb2jNaE20Wb2OArHfKzdFBHFc/tACcpdLZeRbrG3znK0qT3NfhkfpXHi3DwE6UjO5Xlynk9ZZZHb1+D2NMU8kljPMyN9Y8ofVYGThR4k4H3mVcExK3pp1epStHssIVEUsxPRQMmQqtoNbw09b3+ajdr97Xwv3ZjaHY6zWL3est7unIJqpJJfHECy0jlnooEs1aSyb5WERTtikfnzad2o2lrbbKq3te1vhRQWKpyReHIAAT6R2P+hVzu2bQfcB491Wct6M/Ie33z69sTYWm0id3pqUqXrujifNmPFj6zozcSSWEUiHsrZdOmrWnT1rUi8lUY9z1J8zJkRPQeEysa/XnVEpWSunBIdwcG4jmlZHKvoW68h4zHa+s+tE1ISNOpItYHBuI4GpD9jPzN15DrNy4AAAAAGABwAHQAdBM7V6vb7Id+WT1VZ5ZkihQFUBQBgADAA6ADoJkpmGZ5mZJaN5bjMSZrBmW9DbYwelQeB5HgfTrNvYxj9TpU8696rx+R2QfgomoGQ9i7Q7o6mskcL2Iz4MiP/VjND/nS97X0V71wi2RETXKxy+0G1fq9W8MF2O6gY4XOCSzHoqgFifASubD1wxXaK2ZNQ+BqGKhrnwSr7nNazghR0GOHWVP6Z9pu1JFZJFjtQuPsIN67GPtMFU+STk/RTqdbqrKhqLC2n0KYqXAUd4w3UBwPiKqWPHlKd7jKLlLpfskgnlYPshaa2skPVPZuHugpfpvkhfcjjNiZwM4zgZxyz1x5TKlc/BaUUZlp8y+m2y9U0TVEhVsZsjpcADWT7b2PefR9VqErRrLDuqoyxPQf3PlNWs0dWoqNdyB63AyrDHmPNSPvE8qtcJqbEo5WD8/do+0Wv2m1Y1TDdqHAKBWgPVzx4scT7B9GOksr2fULBu7zO6AjBFbHK59eJ95ns7sBoKW3hW1nULa7WqD0O6eB98ybtHbLBmroCkrwZ2yVVvsKo+YjrxwJa1Go9dbII5pplu47O1It/OVm3b2ppbetKXVYywVO7sQdWTBIf0PHzlgruDAMpyGAIPiCMg/dKkq3HssShKDxJHP1dW5alpseutiEu3N3r8NdnxA7uCcEjoR4S1aXs7p0O8UNrcw1rNcR6bxIX2xOJbUrqyOMqwKkeIIwZ1+ymsZ6e7sObKT3T/tY+R/RlKn3M0dBKLzFrkp3prk7IE9iJpFcREQBKztjaptZqaWxWpK3WDIJPWms+P2mHLlz5be0G02JOmobdbh3tg/RKfzV/wCYRy8Bx8M8+mpUVUUYVRgD/wDcz5yjq9Ts9ke/0T1V7uX0Z1gAAAAADAA4ADoBMg8xiZBbNgeZb00z0GMA3BpsUyOGmNuqCkLhndvlRBvO3njkB+0cCFFt4R42l2S8Snba0V119lmnqe5DujeTG7vBFDAEnjjHMS6aXYr2cdUQF/UoTu/9x+b+nAes7taBQAoAA4ADgAPITV0mklW98u/gq22qXCMpH2hf3dVtgGdxHbHjhSf7SRNWrpDo6Hkysp9CCP7zQID5vssabX6eqi+tw6Ito3juMcjjdWynhkscjpkZE7el2cump7vSVIMHO6zFd4n5iz4J3j4mVGq9qqKrQM2afgR1JT4La/cKR90vtFququpyrAMp8QRkfgZgXpxf1nr7NOdShj7XDKv2i25raERl09VYZghdrDdukg4JVQOBIxnPUTjN2x1v/tx57lh/3S9bU0K302UtydSPQ81b2IB9p8nUNxVxh1JRx4ODhh6dfQiWtHCqyLUo8oj8k7UbWvstosutLCu2pt3ASsfGATuDmcE8TmfVmnxW9DZXYEAIKsN4nCnhxxjicePKfYdJZmqpieJRD77onOvrUdu1Y7CXJlq7tyt3+yrN9wJlN0DjcQZ4kBj5seLH1JJMtepsDKyHkwKn0Iwf6yg6VSoNTfPV+TbxyOAb0YYIPnIKFwy7o8bmTdXZk+k7HZgY0yDj8DWKM/ZDnd9scPaV6yzAyePgOpPRR4knhLVsnTGqmutuLAfF+8SWYexOPadXfxJNY1hLyTA0y2Zb3WrRuS3r3Tf9RctUf5d8fdNc06ykujKvzcGQ+FineQ/eBOKLPTmpGdZHdHBeIkTZWtW6mu1eTqD6HqPY5HtJc3ygJB25q3q091tYDMiMyg8sgZGfKTp46gggjIPAjxEApOgoCIAG3y3xs/6x24s/v08sSTI9ejNDvpicqgD1E8zSSRuk9Sh+H0KzbPnrYuM2pdmhBpxWDOJgGnoMjOjKeE4BJIAHEk8AB4k9BNN+oCkIqtZY3y1pxcjxPRV/aOBJ+i7NtYQ+sIIBytC8ax4Gw/pW8uCjw6yxTpp29dfJHO1RIeiqt1GO4+Crrcw5j/kofm/ePDwzLNs7ZtdIIQcT8zMd52PizHif6SWBjgOE9mvVRCpe0qTm5diIiTHAiIgHzvtps00XG0D8jcwJPRLuWD4B+HuD4zPshqz9VRSP8NrKh0+FXIX8MS9a7RpdW9Vqh0cYYHqJTf8A+cdEorb/AAQTuW8TjJzi7wbJ+fkeuJn6yhuO6KLsNRugoS8dM6X1nylJ7c7GLH6zUMBt1dQBnO4MDvlA5kLkHywektmf/rrnzhTiZ1U3XLciRrJUn01K0s64ZQh3SCCDwwoXHqMS16WsrXWp5qir7hQP7SEmwdKLBcKKxYDvBgMfF9rd5Z88To5k+q1KuxhYwe5b7MTOftHYdN7B3VlcDAdGNb4+ySPmHkczpERKqbXQOdoNi1VNvjfsbo1jb5X90YAHrjM6JE9Alf1m3ndjTowptJ3Va4MiM2SDuLzsUbrEt8oxz6TtRlYzyU8cs7pE8nG0erXcpN+p1HeuwrsVVrVKrCxQK4C/CpYYBJ45BlgXREDBcsfEgD24RZBw7PIzUjb2Y1AS23TngHJur98C1R6N8X8cs0p+qocBbE4WVHfXwbA+JD5MuR9xln2Zr0vqruqO8lihlPkenr0mto7d9ePKKlsdsiTERLZEcHtfpm7oaisZegl8Dm9f6VPccR5qJw6tYCCwOQwBU9CCOBl5Inzm/TfV7rdP0U95V/0W44Hkrby+mJQ1tOVvRYon4JiW4XJPUknwHUnwkjQaa3U8as1VfriOLj/kqen7bcPAGcXVWqDU9g3qksVrVPI18t4jqFJDYPgZ9MXGBjl09JHpdPCful/h1bY1wiJs3ZlVCla1xnizH4mY+LMeLGTIiaZVEREAREQBIO0tr0UY76xVJ5LxZm/dRcs3sJVtq3nU2pY1QSuvvEwbGS05IG8FTG4QVHM5weky2FbpyXbTqzE/NcwZ9/jjdFzfPjHIHAlS3WRg2ks4JY1NnWfbd7/4GnKj7V57oeoQAsffEi216hwRbqTg/m0otK48MtvMfvElb+YmdZrbJdPBNGmK7ORodiLS2KSRURxQktuvn5kzyDZOR5AyQ9eOcnzwjMquTbyyZcHPE9Ikl9P4TQyEc57k9MBPcz2IBB2trTWoVAWttylSjAy+M5yxAGBx4npI2yNNZTp6abd1nRCCeDkEsxOGxzIIziSts6PvqLa8ZJU7vQhwMoQRxBz1E3U0rbVXbWeDoDzyc4wePiDn3EkytuDjHuId6rallTEBXwHKgZ3gVIbPVxgAHpgTo7ADChQ5LENYAWO8SosYISTzO7icnY2itSqtLfnTKseB3iGPxj94YPuZ19MdwBV5Dpz65nk+tqPUvJPZQQQeRyD6HgZWOxG1vqlzaC74V3t2vwDcdzHk64P72essyNkZkTaOyaLwBdWrkDAbky+asOIIPH1nemv9GWX0cWQ3ItkTj9m9czI1NpzdThWP21/R2jyYfiCJw+1O3rTZZpqc0hN0WWfntkbwWodBj8/1A48tx2RUd3gqKLbwdHtD2mFRNNAFt/Xj8FWfzrCPwUcT5c5UMksXdjZY3zO3M+QHJV8FE10oFG6owOfjk9SSeJJ8TMrLAoLMQqjmTwAmdbc7OPBZhBRMmOcgjIPAjxB4ES39gtWz6UVsd40M1O9zDBcbpz47pAPmDOJsfs9bqMNZvUU/y22jy/VL/qPlLxo9IlSLXUoRFGAo4ACWdNVKPLIrZp8I3RES2QiIiAIiIBSH09m9YbFxcWDWYwwOchNwj80KuMHBkjZWzu6BxvKDyrz8C+ar+b6DhO5r9gaa5+8tpV3GOJz05cM46zS3Zyrh3b3VY6LYxH8rZEzrtFKTbi+yeNySw0RiJkDFuw9RnKarI8LKkf8AFSpmhtBr15DS2fxXU59sPiVHobl4JfXiSJijgjIII8Rx8pqsTVr/AOmDH9m5f9yrObsF7VfUVXVmohu9RTuk7j8+KkggOH++RT01kItyR0rIt4R2YiJAdmBrHhMe4E2xANPcDzkDTad6LWCjeotYsMc6bD8wx1rY8fIk9DOrPDPVI8ayQnXBxMSJMYA85rFA8Z7k6M9P8om2YET0GcnhD2gjqV1FIzbVn4f1tXN6j59V8x5mTNpaCrX0JfQ4D7ua36Eda3HVc8COYPnMgZTuxW0ToNW2guytdzsaieA7wkkFD1Vxj0Yec1NBZlOuRWujh7kaSxBZXUo6HDoean+4PMHqJ0uy/cDUj6wAxYjuGbiiNj5N3lvniQ3M8uGONh7YbGSxO/DLVbUDh2IVGXrXYfsnx6HiJ8rbVFlIwVU8QpPFDnoR58j6GSyh6M8ro9T9SOD7vEp3YXtUbx9X1DfllGVY8O+Qdf3x1HvLjL0ZKSyiu008MRET08EREAREQBERAEREASvdo03L9LdyDFqG8ww3k+50H8xlhnF7YD/hXfGTU1do/hdW/pmR2x3Qcfo9i8PJqiesJ5PmzQPJ7MTGYB7PZ4ZiDAPSJ4JkDPCIAxPJkDPCIB7OR2goWxQreeD1U9GXwIOD7Tqzl7WbiBO4cSyGfP8AVbT1F5I1VrWvWxQrwVFYcMqg4AkYOTk8ZrqrZ2CIrO55KoLsfYcvUzbtygJqnwOFipcRkqGIJrdcjiuQF4ifWOx+q0llAbSotQHwugADI+OT9SfPrzmtXD1XlsglPYsJFP2B2F1LPXbcw0wRlcBTv25BzxI+GvwPzcCRPpsRLsIKKwivKTk8sRETo5EREAREQBERAEREASFtqve0968812D33TiTZi65BB5EYgHBobKIfFVP+kGezn9nLM6apTnKA1NnnvIxrYH+WTyZ83asSwX4co9mJE9zPZGdGET1iOpmG+PEffPQZTIGYZns8BlPZiDNVupVeZgGx+HGcLVPvMTN+r1pbgOAkSSxjgHD2nsi7UauhKQpPdXZ3mKDg1fXB8ZaOyXY/Uaa8X2XIvwlWSveYOPzd9mxnB4jh7zPswmdZn7FBP8ANYB/sl0mxpa1sUvJUtk8tCIiWyEREQBERAEREAREQBERAEREAqWsQ6a6wN/hXvv1nwsI/KVnzON4eOTNyapD+cJ39oaGu6tqrV3kbmOXoQRxBHiJS9o7G1Gn5K2pq6Mozco8HT9J+8vHy6zM1Wkcpb4lmq1JYZ07NUg5kSDftEn5eE4w2nRnHeqrZxutmts+G62DI+p2/p0yA/eMPzKlNreP5vAe5EpKp56J9yOs1hPM5mq21V+ZlX95gv8AUyZsjYF+pC2XE6elgCERgbrFPEb7jhWCOi8fOWnQbA0tI/JUIviSN5j6u2Sfcy7XopNZk8EMr0uil16oE4WxSfAMCfuzN31hx1Mumq2VRYMWU1uPNFP9pyNT2Sr/AEFj08/hz3tf8r5I9iJ7LQv+rPFevKOCb28TNZMmajYurT9EtwxzqYKf8uwj8GMgksM79V9ePtVWf1UEH75WlRZH+pKrIvyZAzISC+1Kw/d/GWGMgI4wDyJJAAEj6/UWMGCHu1APEcXfhnA+wDy8fSc7HnD4OsouHYrTEtqNQeTlak80TO83oXZ/5RLTI2zHU01MgCqUUgDkAVBAkmbcIqMVFFCTy8iIidHgiIgCIiAIiIAiIgCIiAIiIAiIgFY7eaINSlu6D3TgsSAcIwKMfQbwP8MpVCWEVEKAthsRscMMA2B96kT6zbWGUqwBVgQQeRB4ESlarsc9eaqbT3NliuN4nvKGBBJrYA744cm+8yrqKZTeYktc9vDLH2TcnRaUkYJpr4fwidWatNQK0VF+VQFHoBgTbLREIiIAiIgFH7daJhfVao4Wr3R/6gy1WfUFx90rtSWFaLMYWxgrfsk5Az/GN33n1HaOhS+tqrRlW9iDnIYHoQQCD0Inz3tDpfqKdzcxvq1LlEPy2JY3VuhG9hsjGDnhKWopk3uiTV2JLDLh2NZvqlStzTfT+V2UfgJ25E2ZoVprWtSzYySzEFmJJJJIA45JkuXI5xyRMRET08EREAREQBERAP/Z"
    colSpan = 2;

    isActive = true;

    //EVENT BINDING
    onDivClicked(){
        console.log("Div was clicked", )
    }
    onSave($event){
        $event.stopPropagation(); //Stops event bubbling
        console.log("button was clicked",$event);
    }

    //EventFiltering
    onKeyUp($event){
        if ($event.keyCode === 13) console.log("Enter was pressed", $event.target.value);
        //Cleaner without passing in "$event" as a parameter
        // console.log("ENTER was pressed");
    }

    //Template Variables
    email = "me@example.com";
    onKeyUpp(){
        console.log(this.email);
    }
    
    //Pipes
    course = {
        title: "Angular Tutorial",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2020, 1, 11)
    }
    
}
