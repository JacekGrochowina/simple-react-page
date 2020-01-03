import React from 'react';
import Article from '../components/Article';

const articles = [
    {
        id: 1,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec sapien tempor nisi finibus condimentum ut at erat. Cras et quam dolor. Ut cursus at metus sed pellentesque. Pellentesque arcu orci, porttitor in sodales ut, suscipit et tortor. Aenean dignissim nunc ut ipsum interdum, sed ullamcorper quam tristique. Maecenas rhoncus ullamcorper laoreet. Ut venenatis dictum venenatis. Nullam gravida purus ut fringilla pellentesque. Etiam suscipit pharetra sem."
    },
    {
        id: 2,
        title: "Czym jest paradoks fermiego",
        author: "Cezary Kowalski",
        text: "Tempus sed erat ac porta. Aliquam a efficitur nisi. Aenean ac sem velit. Cras nunc neque, fermentum quis ultricies a, pellentesque eget orci. Sed tincidunt ligula velit, ut semper leo faucibus elementum. Donec ac lorem leo. Nullam dignissim enim eu convallis luctus. Curabitur bibendum rutrum magna, eget pretium enim euismod accumsan. Sed tincidunt lectus dui, at accumsan odio egestas vitae."
    },
    {
        id: 3,
        title: "Czym jest teoria strun",
        author: "Jan Nowak",
        text: "Nunc non gravida sapien. Integer sem felis, viverra vehicula enim at, cursus volutpat quam. Integer fringilla porttitor elementum. Pellentesque pulvinar, eros ut vulputate commodo, nisi tellus lacinia tellus, a fermentum ipsum velit ac massa. Cras in suscipit ex. Nullam in nisl bibendum, pharetra mauris varius, vestibulum felis."
    }
]

const HomePage = () => {

    const artList = articles.map(article => (
        <Article key={article.id} {...article} />
    ))

    return (
        <div className="home">
            {artList}
        </div>
    )
}

export default HomePage;