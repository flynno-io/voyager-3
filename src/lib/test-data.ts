// post data for testing

const posts = [
  {
    title: "First Post",
    description: "This is the first post.",
    number: 1,
    author: "John Doe",
    sol: 100,
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Primis vestibulum facilisi interdum dignissim id ultrices. Eu risus sollicitudin pretium et litora elit metus quisque. Tempor eleifend ac bibendum nisl est viverra. Velit accumsan pulvinar, justo erat sed auctor. Tellus tempus ut magna commodo tellus nisi. Leo est fames fermentum; viverra senectus convallis et volutpat rutrum. Ultricies blandit placerat nam; vehicula netus est. Mattis est molestie adipiscing mollis litora interdum. Inceptos congue quam finibus auctor; id diam.

Lacinia taciti dignissim quisque pulvinar auctor nisl proin cubilia quam. Congue rhoncus ultricies gravida semper nulla. Facilisis dolor ut diam finibus ante laoreet duis hendrerit. Malesuada sapien sit platea amet donec class. Sociosqu volutpat cubilia fermentum; augue aliquam tempor ullamcorper quisque. Vulputate dapibus volutpat morbi aenean, venenatis platea leo diam. Aptent a per volutpat curae ad dis congue? Nisi sollicitudin eu rhoncus quisque dui gravida fringilla vivamus. Consequat magna tortor augue elit diam arcu. Platea elit praesent faucibus facilisis; augue sit fermentum.

Ligula molestie fames blandit bibendum mattis rutrum bibendum. Pretium et elit primis felis posuere ex. Dictum accumsan vehicula bibendum eget dapibus. Placerat torquent sapien cubilia finibus diam placerat dapibus. Duis molestie placerat nisl suspendisse; mus eget. Pellentesque quisque platea lacus a ante, tempor odio. Eros class facilisi purus libero enim egestas. Donec elit platea; dis donec consectetur erat bibendum nibh.

Enim finibus vulputate inceptos lacinia egestas. Aliquet at pretium varius quam ac potenti dictumst. Volutpat egestas enim pharetra volutpat libero molestie ex mattis himenaeos. Suscipit lacus efficitur dolor massa metus porttitor morbi. Quisque himenaeos sociosqu, iaculis morbi eros rutrum nisl sapien. Suspendisse sapien tellus; ullamcorper metus finibus litora. Tortor consectetur lacinia leo velit inceptos. Erat nisi non accumsan ante fames.

Sagittis dolor laoreet aliquam natoque venenatis vestibulum. Nam nec potenti neque risus; ornare iaculis vehicula conubia platea. Duis sodales velit consectetur magnis interdum euismod ad non. Class fames molestie nulla parturient sagittis adipiscing luctus habitasse. Pretium efficitur ultrices a gravida dui nibh blandit. Rutrum etiam natoque condimentum dui felis, aliquet odio volutpat. Rhoncus urna hendrerit facilisi quis orci sagittis lacus platea. Parturient odio sollicitudin hac inceptos donec.`,
  },
  {
    title: "Second Post",
    description: "This is the second post.",
    number: 3,
    author: "Jane Smith",
    sol: 84,
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Primis vestibulum facilisi interdum dignissim id ultrices. Eu risus sollicitudin pretium et litora elit metus quisque. Tempor eleifend ac bibendum nisl est viverra. Velit accumsan pulvinar, justo erat sed auctor. Tellus tempus ut magna commodo tellus nisi. Leo est fames fermentum; viverra senectus convallis et volutpat rutrum. Ultricies blandit placerat nam; vehicula netus est. Mattis est molestie adipiscing mollis litora interdum. Inceptos congue quam finibus auctor; id diam.

Lacinia taciti dignissim quisque pulvinar auctor nisl proin cubilia quam. Congue rhoncus ultricies gravida semper nulla. Facilisis dolor ut diam finibus ante laoreet duis hendrerit. Malesuada sapien sit platea amet donec class. Sociosqu volutpat cubilia fermentum; augue aliquam tempor ullamcorper quisque. Vulputate dapibus volutpat morbi aenean, venenatis platea leo diam. Aptent a per volutpat curae ad dis congue? Nisi sollicitudin eu rhoncus quisque dui gravida fringilla vivamus. Consequat magna tortor augue elit diam arcu. Platea elit praesent faucibus facilisis; augue sit fermentum.

Ligula molestie fames blandit bibendum mattis rutrum bibendum. Pretium et elit primis felis posuere ex. Dictum accumsan vehicula bibendum eget dapibus. Placerat torquent sapien cubilia finibus diam placerat dapibus. Duis molestie placerat nisl suspendisse; mus eget. Pellentesque quisque platea lacus a ante, tempor odio. Eros class facilisi purus libero enim egestas. Donec elit platea; dis donec consectetur erat bibendum nibh.

Enim finibus vulputate inceptos lacinia egestas. Aliquet at pretium varius quam ac potenti dictumst. Volutpat egestas enim pharetra volutpat libero molestie ex mattis himenaeos. Suscipit lacus efficitur dolor massa metus porttitor morbi. Quisque himenaeos sociosqu, iaculis morbi eros rutrum nisl sapien. Suspendisse sapien tellus; ullamcorper metus finibus litora. Tortor consectetur lacinia leo velit inceptos. Erat nisi non accumsan ante fames.

Sagittis dolor laoreet aliquam natoque venenatis vestibulum. Nam nec potenti neque risus; ornare iaculis vehicula conubia platea. Duis sodales velit consectetur magnis interdum euismod ad non. Class fames molestie nulla parturient sagittis adipiscing luctus habitasse. Pretium efficitur ultrices a gravida dui nibh blandit. Rutrum etiam natoque condimentum dui felis, aliquet odio volutpat. Rhoncus urna hendrerit facilisi quis orci sagittis lacus platea. Parturient odio sollicitudin hac inceptos donec.`,
  },
  {
    title: "Third Post",
    description: "This is the third post.",
    number: 6,
    author: "Alice Johnson",
    sol: 92,
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Primis vestibulum facilisi interdum dignissim id ultrices. Eu risus sollicitudin pretium et litora elit metus quisque. Tempor eleifend ac bibendum nisl est viverra. Velit accumsan pulvinar, justo erat sed auctor. Tellus tempus ut magna commodo tellus nisi. Leo est fames fermentum; viverra senectus convallis et volutpat rutrum. Ultricies blandit placerat nam; vehicula netus est. Mattis est molestie adipiscing mollis litora interdum. Inceptos congue quam finibus auctor; id diam.

    Lacinia taciti dignissim quisque pulvinar auctor nisl proin cubilia quam. Congue rhoncus ultricies gravida semper nulla. Facilisis dolor ut diam finibus ante laoreet duis hendrerit. Malesuada sapien sit platea amet donec class. Sociosqu volutpat cubilia fermentum; augue aliquam tempor ullamcorper quisque. Vulputate dapibus volutpat morbi aenean, venenatis platea leo diam. Aptent a per volutpat curae ad dis congue? Nisi sollicitudin eu rhoncus quisque dui gravida fringilla vivamus. Consequat magna tortor augue elit diam arcu. Platea elit praesent faucibus facilisis; augue sit fermentum.
    
    Ligula molestie fames blandit bibendum mattis rutrum bibendum. Pretium et elit primis felis posuere ex. Dictum accumsan vehicula bibendum eget dapibus. Placerat torquent sapien cubilia finibus diam placerat dapibus. Duis molestie placerat nisl suspendisse; mus eget. Pellentesque quisque platea lacus a ante, tempor odio. Eros class facilisi purus libero enim egestas. Donec elit platea; dis donec consectetur erat bibendum nibh.
    
    Enim finibus vulputate inceptos lacinia egestas. Aliquet at pretium varius quam ac potenti dictumst. Volutpat egestas enim pharetra volutpat libero molestie ex mattis himenaeos. Suscipit lacus efficitur dolor massa metus porttitor morbi. Quisque himenaeos sociosqu, iaculis morbi eros rutrum nisl sapien. Suspendisse sapien tellus; ullamcorper metus finibus litora. Tortor consectetur lacinia leo velit inceptos. Erat nisi non accumsan ante fames.
    
    Sagittis dolor laoreet aliquam natoque venenatis vestibulum. Nam nec potenti neque risus; ornare iaculis vehicula conubia platea. Duis sodales velit consectetur magnis interdum euismod ad non. Class fames molestie nulla parturient sagittis adipiscing luctus habitasse. Pretium efficitur ultrices a gravida dui nibh blandit. Rutrum etiam natoque condimentum dui felis, aliquet odio volutpat. Rhoncus urna hendrerit facilisi quis orci sagittis lacus platea. Parturient odio sollicitudin hac inceptos donec.`,
  },
  {
    title: "Fourth Post",
    description: "This is the fourth post.",
    number: 8,
    author: "Bob Brown",
    sol: 100,
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Primis vestibulum facilisi interdum dignissim id ultrices. Eu risus sollicitudin pretium et litora elit metus quisque. Tempor eleifend ac bibendum nisl est viverra. Velit accumsan pulvinar, justo erat sed auctor. Tellus tempus ut magna commodo tellus nisi. Leo est fames fermentum; viverra senectus convallis et volutpat rutrum. Ultricies blandit placerat nam; vehicula netus est. Mattis est molestie adipiscing mollis litora interdum. Inceptos congue quam finibus auctor; id diam.

    Lacinia taciti dignissim quisque pulvinar auctor nisl proin cubilia quam. Congue rhoncus ultricies gravida semper nulla. Facilisis dolor ut diam finibus ante laoreet duis hendrerit. Malesuada sapien sit platea amet donec class. Sociosqu volutpat cubilia fermentum; augue aliquam tempor ullamcorper quisque. Vulputate dapibus volutpat morbi aenean, venenatis platea leo diam. Aptent a per volutpat curae ad dis congue? Nisi sollicitudin eu rhoncus quisque dui gravida fringilla vivamus. Consequat magna tortor augue elit diam arcu. Platea elit praesent faucibus facilisis; augue sit fermentum.
    
    Ligula molestie fames blandit bibendum mattis rutrum bibendum. Pretium et elit primis felis posuere ex. Dictum accumsan vehicula bibendum eget dapibus. Placerat torquent sapien cubilia finibus diam placerat dapibus. Duis molestie placerat nisl suspendisse; mus eget. Pellentesque quisque platea lacus a ante, tempor odio. Eros class facilisi purus libero enim egestas. Donec elit platea; dis donec consectetur erat bibendum nibh.
    
    Enim finibus vulputate inceptos lacinia egestas. Aliquet at pretium varius quam ac potenti dictumst. Volutpat egestas enim pharetra volutpat libero molestie ex mattis himenaeos. Suscipit lacus efficitur dolor massa metus porttitor morbi. Quisque himenaeos sociosqu, iaculis morbi eros rutrum nisl sapien. Suspendisse sapien tellus; ullamcorper metus finibus litora. Tortor consectetur lacinia leo velit inceptos. Erat nisi non accumsan ante fames.
    
    Sagittis dolor laoreet aliquam natoque venenatis vestibulum. Nam nec potenti neque risus; ornare iaculis vehicula conubia platea. Duis sodales velit consectetur magnis interdum euismod ad non. Class fames molestie nulla parturient sagittis adipiscing luctus habitasse. Pretium efficitur ultrices a gravida dui nibh blandit. Rutrum etiam natoque condimentum dui felis, aliquet odio volutpat. Rhoncus urna hendrerit facilisi quis orci sagittis lacus platea. Parturient odio sollicitudin hac inceptos donec.`,
  },
  {
    title: "Fifth Post",
    description: "This is the fifth post.",
    number: 10,
    author: "Charlie Davis",
    sol: 101,
    content: `Lorem ipsum odor amet, consectetuer adipiscing elit. Primis vestibulum facilisi interdum dignissim id ultrices. Eu risus sollicitudin pretium et litora elit metus quisque. Tempor eleifend ac bibendum nisl est viverra. Velit accumsan pulvinar, justo erat sed auctor. Tellus tempus ut magna commodo tellus nisi. Leo est fames fermentum; viverra senectus convallis et volutpat rutrum. Ultricies blandit placerat nam; vehicula netus est. Mattis est molestie adipiscing mollis litora interdum. Inceptos congue quam finibus auctor; id diam.

    Lacinia taciti dignissim quisque pulvinar auctor nisl proin cubilia quam. Congue rhoncus ultricies gravida semper nulla. Facilisis dolor ut diam finibus ante laoreet duis hendrerit. Malesuada sapien sit platea amet donec class. Sociosqu volutpat cubilia fermentum; augue aliquam tempor ullamcorper quisque. Vulputate dapibus volutpat morbi aenean, venenatis platea leo diam. Aptent a per volutpat curae ad dis congue? Nisi sollicitudin eu rhoncus quisque dui gravida fringilla vivamus. Consequat magna tortor augue elit diam arcu. Platea elit praesent faucibus facilisis; augue sit fermentum.
    
    Ligula molestie fames blandit bibendum mattis rutrum bibendum. Pretium et elit primis felis posuere ex. Dictum accumsan vehicula bibendum eget dapibus. Placerat torquent sapien cubilia finibus diam placerat dapibus. Duis molestie placerat nisl suspendisse; mus eget. Pellentesque quisque platea lacus a ante, tempor odio. Eros class facilisi purus libero enim egestas. Donec elit platea; dis donec consectetur erat bibendum nibh.
    
    Enim finibus vulputate inceptos lacinia egestas. Aliquet at pretium varius quam ac potenti dictumst. Volutpat egestas enim pharetra volutpat libero molestie ex mattis himenaeos. Suscipit lacus efficitur dolor massa metus porttitor morbi. Quisque himenaeos sociosqu, iaculis morbi eros rutrum nisl sapien. Suspendisse sapien tellus; ullamcorper metus finibus litora. Tortor consectetur lacinia leo velit inceptos. Erat nisi non accumsan ante fames.
    
    Sagittis dolor laoreet aliquam natoque venenatis vestibulum. Nam nec potenti neque risus; ornare iaculis vehicula conubia platea. Duis sodales velit consectetur magnis interdum euismod ad non. Class fames molestie nulla parturient sagittis adipiscing luctus habitasse. Pretium efficitur ultrices a gravida dui nibh blandit. Rutrum etiam natoque condimentum dui felis, aliquet odio volutpat. Rhoncus urna hendrerit facilisi quis orci sagittis lacus platea. Parturient odio sollicitudin hac inceptos donec.`,
  },
]

const users = [
  {
    id: "410544b2-4001-4271-9855-fec4b6a6442a",
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@test.com",
    password: "testpassword",
    role: "Admin",
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@test.com",
    password: "testpassword",
    role: "User",
  },
]

export { posts, users }
